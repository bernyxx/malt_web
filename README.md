# Sommario
- [Sommario](#sommario)
- [Introduzione](#introduzione)
- [Installazione](#installazione)
  - [Installazione tramite Docker](#installazione-tramite-docker)


# Introduzione

MALT è un linguaggio che consente di ottenere un file Markdown a partire da un nuovo linguaggio procedurale.

Markdown è un linguaggio di markup e non consente l’utilizzo di liste, cicli, classi, funzioni e tutte quelle funzionalità che sono presenti nei linguaggi di programmazione.
MALT permette di unire le funzionalità tipiche dei linguaggi di programmazione con la potente formattazione e strutturazione del testo tipica invece dei linguaggi di markup.

Per poter eseguire il codice MALT è stata predisposta un’interfaccia web in cui è possibile scrivere direttamente oppure importare un file che contiene il codice che si vuole eseguire.

# Installazione

Per installare l’ambiente che permette di eseguire il codice MALT sono disponibili diverse alternative.

## Installazione tramite Docker

L’alternativa più semplice e veloce è quella di scaricare due immagini Docker e successivamente creare ed eseguire i container Docker costruiti a partire dalle immagini appena scaricate.
Le immagini Docker sono un modo pratico e veloce per creare dei container che contengono già tutto il codice e le dipendenze necessarie per eseguire l'ambiente MALT senza installare nulla oltre al motore Docker.

> Per completare l'installazione tramite Docker è necessario avere Docker Engine installato sul proprio computer. Se non si è esperti con i comandi Docker all'interno del terminale si consiglia caldamente di installare l'interfaccia Docker Desktop che integra il sopracitato Docker Engine. I passaggi successivi della guida faranno riferimento all'interfaccia. La guida di installazione di Docker Desktop può essere trovata a questo [link](https://docs.docker.com/desktop/).

>Prima di eseguire i comandi per scaricare le immagini, assicurarsi di avere in esecuzione in background Docker Engine. Se avete installato Docker Desktop basterà avviarlo e in automatico verrà eseguito anche Docker Engine.

Per scaricare l'immagine più recente del backend che esegue l'analisi lessicale, sintattica e semantica eseguire il comando

```shell
docker pull ghcr.io/kevin-bernardi/malt_backend:main
```

Invece, per scaricare l'immagine più recente del frontend, eseguire il comando

```shell
docker pull ghcr.io/kevin-bernardi/malt_frontend:main
```

Se non ci sono stati errori durante il download delle immagini dovrebbero essere comparse due immagini nella sezione "Images" di Docker Desktop.

Per creare ed eseguire i container, sempre dalla sezione Images fare click sul tasto "Play" in fondo alla riga dell'immagine malt_backend. Aprire la sezione "Optional settings" e inserire un nome a piacere nel campo "Container name" e inserire obbligatoriamente 8080 nel campo "Host port". Il resto va lasciato vuoto.
Fare la stessa cosa per l'immagine malt_frontend specificando questa volta una "Host port" a piacere.

Nella sezione "Containers" ora si potranno vedere i due container in esecuzione.

L'installazione dell'ambiente è completata ed ora sarà possibile utilizzare l'interfaccia web all'url [localhost:PORT]() dove PORT è la "Host port" specificata nella creazione del container basato sull'immagine malt_frontend.




