#!/usr/bin/env python3
"""
This is the "8-all.py" module
"""


def list_all(mongo_collection):
    """
    lists all documents in a collection
    """
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())
