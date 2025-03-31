import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { ApiService } from "@/shared/lib/services";

type TableDataResponse<T> = {
  results: T[];
  total: number;
  count: number;
};

const INITIAL_LIMIT = 10;
const INITIAL_PAGE = 1;

export const useTableFetch = <T>(
  url: string,
  initialParams = {},
  ignoredParams: string[] = ["tab"],
  noResults = false,
  defaultPageSize = INITIAL_LIMIT,
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [pagination, setPagination] = useState({
    total: 0,
    limit: Number(searchParams.get("limit")) || defaultPageSize,
    page: Number(searchParams.get("page")) || INITIAL_PAGE,
    offset: 0,
  });

  const offset = useMemo(
    () => (pagination.page - 1) * pagination.limit,
    [pagination.page, pagination.limit],
  );

  const params = useMemo(() => {
    const allParams: { [key: string]: string | number | boolean } = {
      ...initialParams,
      limit: pagination.limit,
      offset,
      search,
      p: true,
      ordering: "-id",
    };
    searchParams.forEach((value, key) => {
      if (!ignoredParams.includes(key)) {
        allParams[key] = value;
      }
    });
    return allParams;
  }, [
    initialParams,
    pagination.limit,
    offset,
    search,
    searchParams,
    ignoredParams,
  ]);

  const queryKey = useMemo(() => {
    return [
      "tableData",
      url,
      {
        ...params,
        page: pagination.page,
        limit: pagination.limit,
      },
    ];
  }, [url, params, pagination.page, pagination.limit]);

  const fetchTableData = async (url: string, options: AxiosRequestConfig) => {
    return await ApiService.$get<TableDataResponse<T>>(url, options);
  };

  const {
    data,
    isLoading,
    error: queryError,
    refetch,
  } = useQuery({
    queryKey,
    queryFn: async () => await fetchTableData(url, { params }),
  });

  useEffect(() => {
    if (!isLoading && !queryError && data) {
      setPagination((prev) => ({
        ...prev,
        total: data.count || 0,
      }));
    }
  }, [isLoading, queryError, data]);

  const onPageChange = (page: number) => {
    if (page && page !== pagination.page) {
      setPagination((prev) => ({ ...prev, page }));
      setSearchParams((prev) => {
        prev.set("page", page.toString());
        return prev;
      });
    }
  };

  useEffect(() => {
    const newLimit = Number(searchParams.get("limit")) || defaultPageSize;
    const newPage = Number(searchParams.get("page")) || INITIAL_PAGE;
    const newSearch = searchParams.get("search") || "";

    searchParams.set("page", "1");

    if (newSearch !== search) {
      setPagination((prev) => ({
        ...prev,
        limit: defaultPageSize,
        page: INITIAL_PAGE,
      }));
      setSearch(newSearch);
    } else {
      setPagination((prev) => ({
        ...prev,
        limit: newLimit,
        page: newPage,
      }));
    }
  }, [searchParams, search, defaultPageSize]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, [data]);

  const tableData = (data ? (noResults ? data : data.results) : []) as T[];

  return {
    tableData,
    pagination,
    isLoading,
    error: queryError,
    onPageChange,
    refetch,
  };
};
