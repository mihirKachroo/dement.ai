from gensim.models.keyedvectors import KeyedVectors

googlenews_model_path = './data/GoogleNews-vectors-negative300.bin'
model = KeyedVectors.load_word2vec_format(googlenews_model_path, binary=True)
model.save("word2vec.model")