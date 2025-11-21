#!/usr/bin/env python3
"""This is for python module '8-make_multiplier.py' """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """returns a function that multiplies a given float by multiplier."""

    def multiplier_func(value: float) -> float:
        return value * multiplier

    return multiplier_func
