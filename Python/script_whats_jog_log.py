#https://chat.whatsapp.com/E1x8L5OVnrDDf0h3Zrx9jK

'''
    Nome: script_whats_jog_log.py
    Objetivo: Enviar mensagem para várias pessoas automaticamente
'''

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import time
import urllib.request

#contatos_df = pd.read_excel('Cópia02 de Lista Alunos do Curso Jogos de Lógica para Programação - IFPR Cascavel (2024).xlsx')
#print(contatos_df)
#contatos_serie = joglog_df['Telefone do Responsável:']
#Telefone do Responsável:

#teste
contatos_df = pd.DataFrame({'Pessoa' : ['Kainã'],
                       'Contato': ['554591193650']})

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)

#abrindo o navegador
servico = Service(ChromeDriverManager().install())

#cria o navegador
navegador = webdriver.Chrome(service=servico, options=chrome_options)

#entrar em um link da internet
navegador.get("https://web.whatsapp.com/")

#esperar até que o login esteja concluido, encontra os elementos com id = side
while len(navegador.find_elements(By.XPATH,'//*[@id="app"]/div/div[2]/header/div/div/div/div/span/div/div[1]')) <1:
    time.sleep(5)

mensagem = (
    "🌟 *Seu filho(a) foi selecionado(a) para participar do JogLog: Jogos com Lógica!* 🌟\n\n"
    "Prezados Responsáveis,\n\n"
    "Sou Kainã Magdiel, monitor do projeto de extensão, estou enviando esta mensagem em nome dos coordenadores\n\n"
    "E é com grande satisfação que informamos que seu filho(a) foi selecionado(a) para participar do *JogLog: Jogos com Lógica!* "
    "Este projeto é uma oportunidade incrível para aprender pensamento computacional de forma divertida e criativa, através da criação de jogos.\n\n"
    "📚 *Sobre o JogLog:* 📚\n\n"
    "O JogLog é um curso destinado a jovens de 10 a 12 anos, onde eles aprendem a programar utilizando blocos visuais, "
    "facilitando o entendimento dos conceitos de lógica e desenvolvimento de pensamento computacional. "
    "Além disso, o curso promove habilidades como resolução de problemas, trabalho em equipe e criatividade.\n\n"
    "📝 *Próximos Passos:* 📝\n\n"
    "Para que possamos compartilhar mais informações sobre o curso, incluindo cronograma, materiais necessários e orientações, "
    "pedimos que você entre no grupo oficial do JogLog clicando no link abaixo ou usando o botão 'Entrar no grupo'.\n\n"
    "👉 Grupo WhatsApp: (https://chat.whatsapp.com/E1x8L5OVnrDDf0h3Zrx9jK)\n\n"
    "Estamos muito animados para ter seu filho(a) conosco nessa jornada de aprendizado e desenvolvimento!\n\n"
    "Caso tenha alguma dúvida ou necessite de mais informações, sinta-se à vontade para entrar em contato conosco.\n\n"
    "Atenciosamente,\n\nEquipe JogLog 🎮"
)


# Enviar mensagem para cada contato
for i in range(len(contatos_df)):
    numero = contatos_df.loc[i, 'Telefone do Responsável:']
    texto = urllib.parse.quote(f"{mensagem}")
    link = f"https://web.whatsapp.com/send?phone={numero}&text={texto}"
    navegador.get(link)

    # Esperar até que o campo de mensagem esteja presente e então enviar a mensagem
    try:
        campo_mensagem = WebDriverWait(navegador, 20).until(
            EC.presence_of_element_located((By.XPATH, '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div[1]/p'))
        )

        time.sleep(5)

        campo_mensagem.click()  # Clique no campo de mensagem antes de digitar
        campo_mensagem.send_keys(Keys.ENTER)

    except Exception as e:
        print(f"Erro ao enviar mensagem para {pessoa}: {e}")

    time.sleep(20)

