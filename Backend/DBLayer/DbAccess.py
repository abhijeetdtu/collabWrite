from CollabWrite.Backend.DBLayer.DbConnect import mongo
import os

class DbAccess:

	if('MONGODB_USER' not in os.environ):
		from pymongo import MongoClient
		from urllib import quote_plus
		username , password = open("CollabWrite/credLoad.txt").read().split("\n")

		client = MongoClient('mongodb://%s:%s@%s' % ( quote_plus(username) , quote_plus(password) ,'127.0.0.1:27017'))

	else:

		client = mongo

	dbName = "CWDB"

	def GetDB(self):
		return DbAccess.client.db[DbAccess.dbName]

	def GetConnection(self):
		return DbAccess.client
