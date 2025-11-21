#!/usr/bin/env python3
"""This is for python module '7-to_kv.py' """
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """returns a tuple with k and the square of v"""
    return (k, float(v * v))
