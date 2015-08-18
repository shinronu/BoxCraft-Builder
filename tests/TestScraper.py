# coding=utf-8
from miner.miner.basepipeline import BasePipeline

__author__ = 'darryl'

import unittest


class MyTestCase(unittest.TestCase):
    def test_price_validation(self):
        itemfield = u"€543,50"
        bp = BasePipeline()
        found = bp.validate_price(itemfield)
        expected = 543.5
        self.assertEqual(found, expected)

    def test_numerical(self):
        itemfield = u'asd4shadgahd325'
        bp = BasePipeline()
        found = bp.validate_numerical(itemfield)
        expected = 4325
        self.assertEqual(found, expected)

    def test_validate_formfactors(self):
        itemfield = u'µATX'
        bp = BasePipeline()
        found = bp.validate_formfactor(itemfield)
        expected = 'uATX'
        self.assertEqual(found, expected)

    def test_validate_formfactors2(self):
        itemfield = u'SDASFDA'
        bp = BasePipeline()
        found = bp.validate_formfactor(itemfield)
        expected = 'Onbekend'
        self.assertEqual(found, expected)

if __name__ == '__main__':
    unittest.main()
