# test_project_5

Реализован следующий функционал:
- расчет пространственной геометрии конуса через триангуляцию (производится на сервере)
- визуализация расчитанной геометрии конуса (на клиенте)
- ввод основных характеристик конуса с перестроением

### Интерфейс
![alt text](Скриншот_1.png)

Это fullstack проект, в котором используются технологии:

**backend**
- Python 
- Flask

**frontend**
- React
- react-tree-fiber
- module scss

### Развертывание и Запуск
- в системе должны присутствовать Python3.8 и Node.js
- git clone https://github.com/kai-nn/test_projekt_5.git
- cd test_projekt_5
- backend:
  - ставим виртуальное окружение Python: python3 -m virtualenv -p python3 venv
  - ставим зависимости: sudo python3 -m pip install -r requirements.txt 
  - активируем окружение: source venv/bin/activate
  - запускаем сервер: flask run
- front:
  - cd front
  - ставим зависимости: npm i
  - запускаем сервер: npm run start