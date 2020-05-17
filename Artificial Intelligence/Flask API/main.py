import text_similarity

def similarity_score(sentence1, sentence2):
    percentage = text_similarity.token_set_ratio(sentence1, sentence2)
    percentage = float(percentage)/100
    return percentage

sent1 = "A couple are playing with a young child outside"
sent2 = "A couple playing with a little boy on the beach"

# print(similarity_score(sent1, sent2))