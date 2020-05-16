import text_similarity

percentage = float(text_similarity.token_set_ratio(
    "A couple are playing with a young child outside",
    "A couple playing with a little boy on the beach"))/100
print(percentage)