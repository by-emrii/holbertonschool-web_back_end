#!/usr/bin/env python3
"""This is for python module '0-simple_helper_function.py """


def index_range(page: int, page_size: int) -> tuple:
    """
    return a tuple of (startIndex, endIndex)
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
