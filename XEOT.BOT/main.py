from vk_api.longpoll import VkLongPoll, VkEventType
import vk_api
from datetime import datetime
import time
token = ""
vk_session = vk_api.VkApi(token=token)

session_api = vk_session.get_api()
longpoll = VkLongPoll(vk_session)
time = datetime.strftime(datetime.now(), "%H")
weekday = datetime.isoweekday(datetime.now())
while True:
    for event in longpoll.listen():
        if event.type == VkEventType.MESSAGE_NEW:
            weekday = datetime.isoweekday(datetime.now())
            print('Сообщение пришло в: ' + str(datetime.strftime(datetime.now(), "%H:%M:%S")))
            print('Текст сообщения: ' + str(event.text))
            print(event.user_id)
            response = event.text.lower()
            if event.from_user and not (event.from_me):
                if response == "привет" or response == "хай":
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Привет, друг!\nЧтобы узнать мои команды напиши "Команды"', 'random_id': 0})
                elif response == "пока":
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Пока, друг!', 'random_id': 0})
                elif response == "автор":
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'https://vk.com/victork0t', 'random_id': 0})

                    #расписание
                elif response == "расписание":
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Понедельник:\nХимия\nФизика\nМатематика\n__________'
                    '\nВторник:\nЛит-ра\nМатематика\nФиз-ра\n__________\nСреда:\nОбщество\nИстория\nИнформатика\nАнгл-яз (Физ-ра)\n__________\nЧетверг:\n'
                    'Русский-яз\nОБЖ\nГеография (Эколгия)\nТехнология (Физика)\n__________\nПятница:\nАнгл-яз\nАстрономия (Информатика)\nЛитр-ра (Биология)\nМатематика', 'random_id': 0})
                    #затра

                elif response == "завтра" and weekday == 7:
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Завтра:\nХимия\nФизика\nМатематика', 'random_id': 0})
                elif response == "завтра" and weekday == 1:
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Завтра:\nЛит-ра\nМатематика\nФиз-ра', 'random_id': 0})
                elif response == "завтра" and weekday == 2:
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Завтра:\nОбщество\nИстория\nИнформатика\nАнгл-яз (Физ-ра)', 'random_id': 0})
                elif response == "завтра" and weekday == 3:
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Завтра:\nРусский-яз\nОБЖ\nГеография (Эколгия)\nТехнология (Физика)', 'random_id': 0})
                elif response == "завтра" and weekday == 4:
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Завтра:\nАнгл-яз\nАстрономия (Информатика)\nЛитр-ра (Биология)\nМатематика', 'random_id': 0})
                elif response == "завтра" and weekday == 5:
                    vk_session.method('messages.send', {'user_id': event.user_id,'message': 'Завтра:\nВыходной!','random_id': 0})
                elif response == "завтра" and weekday == 6:
                    vk_session.method('messages.send', {'user_id': event.user_id,'message': 'Завтра:\nВыходной!','random_id': 0})

                    #сегодня

                elif response == "сегодня" and weekday == 1:
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Сегодня:\nХимия\nФизика\nМатематика', 'random_id': 0})
                elif response == "сегодня" and weekday == 2:
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Сегодня:\nЛит-ра\nМатематика\nФиз-ра', 'random_id': 0})
                elif response == "сегодня" and weekday == 3:
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Сегодня:\nОбщество\nИстория\nИнформатика\nАнгл-яз (Физ-ра)', 'random_id': 0})
                elif response == "сегодня" and weekday == 4:
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Сегодня:\nРусский-яз\nОБЖ\nГеография (Эколгия)\nТехнология (Физика)', 'random_id': 0})
                elif response == "сегодня" and weekday == 5:
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Сегодня:\nАнгл-яз\nАстрономия (Информатика)\nЛитр-ра (Биология)\nМатематика', 'random_id': 0})
                elif response == "сегодня" and weekday == 6:
                    vk_session.method('messages.send', {'user_id': event.user_id,'message': 'Сегодня:\nВыходной!','random_id': 0})
                elif response == "сегодня" and weekday == 7:
                    vk_session.method('messages.send', {'user_id': event.user_id,'message': 'Сегодня:\nВыходной!','random_id': 0})

                    #По дням недели

                elif response == "понедельник":
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Химия\nФизика\nМатематика', 'random_id': 0})
                elif response == "вторник":
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Лит-ра\nМатематика\nФиз-ра', 'random_id': 0})
                elif response == "среда":
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Общество\nИстория\nИнформатика\nАнгл-яз (Физ-ра)', 'random_id': 0})
                elif response == "четверг":
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Русский-яз\nОБЖ\nГеография (Эколгия)\nТехнология (Физика)', 'random_id': 0})
                elif response == "пятница":
                    vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Англ-яз\nАстрономия (Информатика)\nЛитр-ра (Биология)\nМатематика', 'random_id': 0})








                else: vk_session.method('messages.send', {'user_id': event.user_id, 'message': 'Команды:\nЗавтра\nРасписание\nСегодня\nПонедельник\nВторник\n...\nПятница', 'random_id': 0})



