import math

pi = 3.1415926535


def calcNormal(B, P):
    magnitude = math.sqrt(pow(P[0] - B[0], 2) + pow(P[1] - B[1], 2) + pow(P[2] - B[2], 2))

    # единичная нормаль к конич. пов.
    ni = (
        P[0] - B[0],
        P[1] - B[1],
        P[2] - B[2]
    )
    return (
        ni[0] / magnitude,
        ni[1] / magnitude,
        ni[2] / magnitude
    )

def calcGeometry(h, r, N):
    """ Расчет геометрии """

    A = (0, 0, h)
    B = (0, 0, - pow(r, 2) / h)
    vertices = []
    normals = []
    for i in list(range(N)):
        # вычисление вершин треугольников
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
        vertices += [*A, *P, *Pn]

        # вычисление нормалей в точках
        normA = calcNormal(B, A)
        normP = calcNormal(B, P)
        normPn = calcNormal(B, Pn)

        normals += [*normA, *normP, *normPn]

    return vertices, normals
