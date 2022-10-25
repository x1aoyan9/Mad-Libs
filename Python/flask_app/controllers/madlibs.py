from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.madlib import MadLib

@app.route("/")
# def new_madLib():
#     return render_template("new_MadLib.html")
def dashboard():
    return render_template('dashboard.html')

@app.route("/new")
def new_madLib():
    return render_template("new_MadLib.html")

@app.route("/add/madlibs", methods=["POST"])
def create_madLib():
    if not MadLib.valid(request.form):
        return redirect("/new")
    data = {
        "your_name" : request.form['your_name'],
        "adjective" : request.form['adjective'],
        "adjective_2" : request.form['adjective_2'],
        "noun" : request.form['noun'],
        "noun_2" : request.form['noun_2'],
        "plural_noun" : request.form['plural_noun'],
        "game" : request.form['game'],
        "plural_noun_2" : request.form['plural_noun_2'],
        "verb_ending_ING" : request.form['verb_ending_ING'],
        "verb_ending_ING2" : request.form['verb_ending_ING2'],
        "plural_noun_3" : request.form['plural_noun_3'],
        "verb_ending_ING3" : request.form['verb_ending_ING3'],
        "noun_3" : request.form['noun_3'],
        "plant" : request.form['plant'],
        "body_part" : request.form['body_part'],
        "place" : request.form['place'],
        "verb_ending_ING4" : request.form['verb_ending_ING4'],
        "adjective_3" : request.form['adjective_3'],
        "number" : request.form['number'],
        "plural_noun_4" : request.form['plural_noun_4']
    }
    MadLib.create(data)
    return redirect('/')

@app.route("/madlibs/<int:id>")
def show_madLib(id):
    data = {
        "id" : id
    }
    return render_template("show_MadLib.html", madlib=MadLib.get_one(data))

@app.route("/edit/madlibs/<int:id>")
def edit_madLib(id):
    data = {
        "id" : id
    }
    return render_template("edit_MadLib.html", edit=MadLib.get_one(data))

@app.route("/update/madlibs", methods=['POST'])
def update_madLib():
    if not MadLib.valid(request.form):
        # return redirect("/")
        return redirect("/new")
    data = {
        "your_name" : request.form['your_name'],
        "adjective" : request.form['adjective'],
        "adjective_2" : request.form['adjective_2'],
        "noun" : request.form['noun'],
        "noun_2" : request.form['noun_2'],
        "plural_noun" : request.form['plural_noun'],
        "game" : request.form['game'],
        "plural_noun_2" : request.form['plural_noun_2'],
        "verb_ending_ING" : request.form['verb_ending_ING'],
        "verb_ending_ING2" : request.form['verb_ending_ING2'],
        "plural_noun_3" : request.form['plural_noun_3'],
        "verb_ending_ING3" : request.form['verb_ending_ING3'],
        "noun_3" : request.form['noun_3'],
        "plant" : request.form['plant'],
        "body_part" : request.form['body_part'],
        "place" : request.form['place'],
        "verb_ending_ING4" : request.form['verb_ending_ING4'],
        "adjective_3" : request.form['adjective_3'],
        "number" : request.form['number'],
        "plural_noun_4" : request.form['plural_noun_4'],
        "id" : request.form['id'],
    }
    MadLib.update(data)
    return redirect("/madlibs/<int:id>")

@app.route("/delete/madlibs/<int:id>")
def delete_madLib(id):
    data = {
        "id" : id
    }
    MadLib.delete(data)
    return redirect("/")