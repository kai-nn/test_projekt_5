# test_project_5

Реализован следующий функционал:
- расчет пространственной геометрии конуса через триангуляцию (производится на сервере)
- визуализация расчитанной геометрии конуса (на клиенте)
- ввод основных характеристик конуса с перестроением
- реберное / гладкое представление

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

### Развертывание для проверки работоспособности
- в системе должны присутствовать Python3.8 и Node.js
- git clone https://github.com/kai-nn/test_projekt_5.git
- cd test_projekt_5
- backend (порядок для Linux Ubuntu):
  - ставим виртуальное окружение для Python (если не установлено): sudo apt install -y python3-venv
  - ставим виртуальное окружение для приложения: sudo python3 -m venv venv
  - изменяем права на venv: sudo chmod -R a+rwx venv
  - активируем окружение: source venv/bin/activate
  - ставим зависимости: pip install -r requirements.txt 
  - запускаем сервер отладки: flask run
- front (в терминале на клиентской машине):
  - cd front
  - ставим зависимости: npm i
  - запускаем сервер: npm run start

### Развернутая версия на сервере (временно, для демонстрации)
www.test.promdev.ru

Дополнительно к вышеуказанному применялись:
- сервер: HP microserver G8
- система виртуализации: Proxmox
- регистрация домена: Timeweb.com
- проксирование: Nginx
- производственный сервер приложений: Gunicorn
