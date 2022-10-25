# METHODS
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class MadLib:
    db = 'mad_libs'
    def __init__(self, data):
        self.id = data['id']
        self.your_name = data['your_name']
        self.adjective = data['adjective']
        self.adjective_2 = data['adjective_2']
        self.noun = data['noun']
        self.noun_2 = data['noun_2']
        self.plural_noun = data['plural_noun']
        self.game = data['game']
        self.plural_noun_2 = data['plural_noun_2']
        self.verb_ending_ING = data['verb_ending_ING']
        self.verb_ending_ING2 = data['verb_ending_ING2']
        self.plural_noun_3 = data['plural_noun_3']
        self.verb_ending_ING3 = data['verb_ending_ING3']
        self.noun_3 = data['noun_3']
        self.plant = data['plant']
        self.body_part = data['body_part']
        self.place = data['place']
        self.verb_ending_ING4 = data['verb_ending_ING4']
        self.adjective_3 = data['adjective_3']
        self.number = data['number']
        self.plural_noun_4 = data['plural_noun_4']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM mad_lib;"
        results = connectToMySQL(cls.db).query_db(query)
        all_madLibs = []
        for row in results:
            print(row['your_name'])
            all_madLibs.append(cls(row))
        return all_madLibs

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM mad_lib WHERE id = %(id)s;"
        results = connectToMySQL(cls.db).query_db(query, data)
        return cls(results[0])

    @classmethod
    def create(cls, data):
        query = "INSERT INTO mad_lib (your_name, adjective, adjective_2, noun, noun_2, plural_noun, game, plural_noun_2, verb_ending_ING, verb_ending_ING2, plural_noun_3, verb_ending_ING3, noun_3, plant, body_part, place, verb_ending_ING4, adjective_3, number, plural_noun_4) VALUES (%(your_name)s, %(adjective)s, %(adjective_2)s, %(noun)s, %(noun_2)s, %(plural_noun)s, %(game)s, %(plural_noun_2)s, %(verb_ending_ING)s, %(verb_ending_ING2)s, %(plural_noun_3)s, %(verb_ending_ING3)s, %(noun_3)s, %(plant)s, %(body_part)s, %(place)s, %(verb_ending_ING4)s, %(adjective_3)s, %(number)s, %(plural_noun_4)s);"
        return connectToMySQL(cls.db).query_db(query, data)

    @classmethod
    def update(cls, data):
        query = "UPDATE mad_lib SET your_name = %(your_name)s, adjective = %(adjective)s, adjective_2 = %(adjective_2)s, noun = %(noun)s, noun_2 = %(noun_2)s, plural_noun = %(plural_noun)s, game = %(game)s, plural_noun_2 = %(plural_noun_2)s, verb_ending_ING = %(verb_ending_ING)s, verb_ending_ING2 = %(verb_ending_ING2)s, plural_noun_3 = %(plural_noun_3)s, verb_ending_ING3 = %(verb_ending_ING3)s, noun_3 = %(noun_3)s, plant = %(plant)s, body_part = %(body_part)s, place = %(place)s, verb_ending_ING4 = %(verb_ending_ING4)s, adjective_3 = %(adjective_3)s, number = %(number)s, plural_noun_4 = %(plural_noun_4)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL(cls.db).query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM mad_lib WHERE id = %(id)s;"
        return connectToMySQL(cls.db).query_db(query, data)

    @staticmethod
    def valid(madlib):
        is_valid = True
        if len(madlib['your_name']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['adjective']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['adjective_2']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['noun']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['noun_2']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['plural_noun']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['game']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['plural_noun_2']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['verb_ending_ING']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['verb_ending_ING2']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['plural_noun_3']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['verb_ending_ING3']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['noun_3']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['plant']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['body_part']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['place']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['verb_ending_ING4']) == 0:
            flash('Must be filled in')
            is_valid = False
        if len(madlib['adjective_3']) == 0:
            flash('Must be filled in')
            is_valid = False
        if madlib['number'] == "":
            flash('Must be filled in')
            is_valid = False
        if len(madlib['plural_noun_4']) == 0:
            flash('Must be filled in')
            is_valid = False
        return is_valid