#!/usr/bin/env python3
"""This is for python module '9-element_length.py' """
from typing import List, Iterable, Sized, Tuple


def element_length(lst: Iterable[Sized]) -> List[Tuple[Sized, int]]:
    """Return length"""
    return [(i, len(i)) for i in lst]
