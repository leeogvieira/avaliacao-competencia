# Use a imagem oficial do Node.js
FROM node:16

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Instale o http-server globalmente
# RUN npm install -g http-server
RUN npm install -g live-server

# Copie todos os arquivos da aplicação para o contêiner
COPY . .

# Exponha a porta 8090
EXPOSE 80

# Comando para rodar o http-server na porta 80
# CMD ["http-server", "-c-1", "-p", "80"]
CMD ["live-server", "--port=80", "--host=0.0.0.0", "--no-browser", "--watch=."]

# -c-1
#   -c é uma opção que define o cache-control.
#   -1 significa que o servidor não irá usar cache. Ou seja, ele desabilita o cache e sempre carrega os arquivos do servidor diretamente, o que pode ser útil durante o desenvolvimento para garantir que você veja as últimas alterações no código sem precisar dar um F5 no navegador.
#   Em resumo, -c-1 indica que o cache será desabilitado.

# -p 80
#   -p é a opção para especificar a porta em que o servidor irá rodar.
#   80 é a porta padrão para servidores web (HTTP). Ou seja, o servidor vai estar acessível na porta 80 do contêiner.
#   Você pode acessar o site usando http://localhost:80 (ou http://localhost na maioria dos casos, já que a porta 80 é a porta padrão para HTTP).

# live-server
#   live-server é uma ferramenta de servidor HTTP simples que serve arquivos estáticos, mas com suporte a hot-reload.
#   Sempre que você faz uma alteração no código-fonte, o live-server detecta e recarrega automaticamente a página no navegador, sem necessidade de você apertar F5.

# --host=0.0.0.0 
#   Torna o servidor acessível em todas as interfaces de rede do contêiner (com 0.0.0.0), permitindo o acesso externo.

#--no-browser
#   Evita abrir o navegador automaticamente com --no-browser.

#--watch=.
#   Habilita o hot-reload com --watch=., ou seja, ele observa e recarrega a página sempre que você faz alterações no código-fonte.