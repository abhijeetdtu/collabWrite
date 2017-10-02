import unittest
from CollabWrite.Backend.DBLayer.DbAccess import  DbAccess

class TestDBConnection(unittest.TestCase):

	def setUp(self):
		self.testDB = "testDB"
		self.testCollection = "testCollection"
		self.sut = DbAccess()

	def test_GetDBReturnsDBObject(self):
		self.assertTrue(self.sut.GetDB() != None)

	def test_GetConnectionReturnsConnection(self):
		self.assertTrue(self.sut.GetConnection() != None)

	def test_CanCreateObjects(self):
   		connection = self.sut.GetConnection()
   		db = connection[self.testDB]
   		collection = db[self.testCollection]
   		insertedId = collection.insert_one({"name": "hello" , "value" : 234}).inserted_id
   		self.assertTrue(insertedId != None)


if __name__ == '__main__':
    unittest.main()
