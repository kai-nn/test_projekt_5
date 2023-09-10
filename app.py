from flask import Flask, request, jsonify

from defs import *

app = Flask(__name__, static_folder="./front/build", static_url_path='/')


@app.route('/', methods=["GET"])
def index():
    return app.send_static_file('index.html')


@app.route('/calculation', methods=['POST'])
def calculation():
    value = request.get_json()
    print('value: ', value)

    h = value['h']
    r = value['r']
    N = value['N']

    vertices, indices, normals = createTriangulation(h, r, N)

    output = {
        'vertices': vertices,
        'indices': indices,
        'normals': normals,
    }
    return jsonify(output)



# if __name__ == '__main__':
#     app.run()
