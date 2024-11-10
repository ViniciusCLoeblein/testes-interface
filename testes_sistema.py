from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Configurar o WebDriver
driver = webdriver.Chrome()

# Teste 1: Carregar a Página Inicial
def teste_pagina_inicial():
    driver.get("http://localhost:3000")
    assert "Página Inicial" in driver.title
    print("Teste 1: Página inicial carregada com sucesso.")

# Teste 2: Navegar para a Página de Produtos
def teste_navegacao_produtos():
    driver.get("http://localhost:3000")
    link_produtos = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, 'a[href="/produtos"] button'))
    )
    link_produtos.click()
    time.sleep(1)
    assert "Página de Produtos" in driver.page_source
    print("Teste 2: Navegação para a página de produtos bem-sucedida.")

# Teste 3: Submeter o Formulário de Contato
def teste_formulario_contato():
    driver.get("http://localhost:3000/contato")
    
    # Preencher os campos do formulário
    driver.find_element(By.NAME, "nome").send_keys("Test User")
    driver.find_element(By.NAME, "email").send_keys("test@example.com")
    driver.find_element(By.NAME, "mensagem").send_keys("Esta é uma mensagem de teste.")
    
    # Enviar o formulário
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
    
    # Aguardar o carregamento da página após o envio
    time.sleep(2)
    
    # Verificar se a mensagem de sucesso aparece
    sucesso_msg = driver.find_element(By.XPATH, "//p[contains(text(), 'Mensagem enviada com sucesso!')]")
    assert sucesso_msg.is_displayed()
    print("Teste 3: Formulário submetido com sucesso.")

# Executar os testes
teste_pagina_inicial()
teste_navegacao_produtos()
teste_formulario_contato()

# Fechar o navegador
driver.quit()
