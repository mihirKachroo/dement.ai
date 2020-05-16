import text_similarity

percentage = text_similarity.token_set_ratio(
    "A couple are playing with a young child outside",
    "A couple playing with a little boy on the beach")
percentage = float(percentage)/100
print(percentage)