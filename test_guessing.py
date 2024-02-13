import unittest
import guessing

class TestGuessing(unittest.TestCase):
    def setUp(self):
        print('about to test a function')
    
    def test_input(self):
        result = guessing.run_guess(5, 5)
        self.assertTrue(result)
    
    def test_input_wrong_guess(self):
        result = guessing.run_guess(5, 0)
        self.assertFalse(result)

    def test_input_wrong_number(self):
        result = guessing.run_guess(5, 11)
        self.assertFalse(result)
    
    def test_input_wrong_type(self):
        result = guessing.run_guess(5, '11')
        self.assertFalse(result)
        
        
if __name__ == '__main__':
    unittest.main()