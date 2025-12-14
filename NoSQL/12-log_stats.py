#!/usr/bin/env python3
"""
This is the "12-log_stats.py" module
"""
from pymongo import MongoClient


if __name__ == "__main__":
    """
    provides some stats about Nginx logs stored in MongoDB
    """
    client = MongoClient()
    db = client.logs
    collection = db.nginx

    total = collection.count_documents({})
    print(f"{total} logs")

    # methods count
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # GET status count
    status_count = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_count} status check")