import math

pi = 3.14


def createTriangulation(h, r, N):
    """ Триангуляция точек """

    # вычисление вершин треугольников
    vertexes = []
    for i in list(range(N)):
        A = (0, 0, h)
        P = (
            r * math.cos(2 * pi * i / N),
            r * math.sin(2 * pi * i / N),
            0
        )
        Pn = (
            r * math.cos(2 * pi * (i+1) / N),
            r * math.sin(2 * pi * (i+1) / N),
            0
        )

        vertexes += [*A, *P, *Pn]

    # индексы вершин
    indices = []
    for i in list(range(N * 3)):
        indices.append(0)
        indices.append(i + 1)
        indices.append(i + 2)

    # нормали
    normals = []
    for i in list(range(N * 3)):
        normals += [(0, 0, 1)]

    return vertexes, indices, normals

