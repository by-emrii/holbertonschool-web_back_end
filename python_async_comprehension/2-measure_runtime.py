#!/usr/bin/env python3
"""This is for python module '2-measure_runtime.py' """
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    return total runtime of running async comprehension
    function 4 times
    """
    start_time = time.time()
    tasks = [async_comprehension() for i in range(4)]
    await tasks
    end_time = time.time()
    total_time = end_time - start_time
    return total_time
