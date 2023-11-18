# Guida Utente MALT

## Sommario
- [Guida Utente MALT](#guida-utente-malt)
  - [Sommario](#sommario)
  - [Introduzione](#introduzione)
  - [Installazione](#installazione)
    - [Esecuzione da codice sorgente](#esecuzione-da-codice-sorgente)
    - [Installazione tramite Docker](#installazione-tramite-docker)
  - [Linguaggio MALT](#linguaggio-malt)
    - [Variabili](#variabili)
    - [Tipi](#tipi)
    - [Variabili primitive testuali](#variabili-primitive-testuali)


## Introduzione

MALT è un linguaggio che consente di ottenere un file Markdown a partire da un nuovo linguaggio procedurale.

Markdown è un linguaggio di markup e non consente l’utilizzo di liste, cicli, classi, funzioni e tutte quelle funzionalità che sono presenti nei linguaggi di programmazione.
MALT permette di unire le funzionalità tipiche dei linguaggi di programmazione con la potente formattazione e strutturazione del testo tipica invece dei linguaggi di markup.

Per poter eseguire il codice MALT è stata predisposta un’interfaccia web in cui è possibile scrivere direttamente oppure importare un file che contiene il codice che si vuole eseguire.

## Installazione

Per installare ed eseguire l’ambiente che permette di eseguire il codice MALT sono disponibili diverse alternative: l'esecuzione in modalità sviluppatore direttamente dagli script contenuti nel codice sorgente oppure l'esecuzione dell'ambiente pronto alla produzione tramite container Docker di immagini già costruite e pronte da utilizzare.

### Esecuzione da codice sorgente

Il metodo piu semplice per utilizzare l'ambiente è quello di eseguire gli script utilizzati per provare il programma durante la fase di sviluppo. Questa modalità però non permette di simulare un ambiente reale con tutte le ottimizzazioni che i framework usano dopo aver eseguito il "build".
Il programma si divide in due parti: analizzatore (back-end) e interfaccia (front-end).

>Per il front-end è stato utilizzato Next.js che richiede l'installazione di Node.js e di npm sul sistema. Per scaricare Node.js basta andare a [questo indirizzo](https://nodejs.org/en/download). L'installazione di Node.js solitamente già include npm.

Per eseguire il back-end basta entrare nella cartella "malt_backend" e lanciare il comando 
```shell
./mvnw spring-boot:run
```

Verrà lanciato un server realizzato con spring-boot disponibile alla porta 8000.

Per lanciare l'interfaccia invece basta entrare nella cartella "malt_frontend" ed eseguire il comando

```shell
npm run dev
```

Una volta avviato il front-end è possibile utilizzare l'interfaccia all'indirizzo <http://localhost:3000>


### Installazione tramite Docker

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

L'installazione dell'ambiente è completata ed ora sarà possibile utilizzare l'interfaccia web all'url <localhost:PORT> dove PORT è la "Host port" specificata nella creazione del container basato sull'immagine malt_frontend.

## Linguaggio MALT

Nei seguenti capitoli verranno esposte le funzionalità del linguaggio in ordine di difficoltà partendo dalle variabili e arrivando alla fine ad utilizzare tutto quello che serve per affrontare i casi d'uso più comuni.

### Variabili

La dichiarazione di variabili avviene in questo modo:

```java
tipo nome_variabile = valore;
```

Ecco un esempio:

```java
text t = "sono un testo";
```

Analizziamo parola per parola questa istruzione:
- `text`: tipo della variabile. `text` rappresenta testo semplice (vedi sotto quali sono i tipi disponibili)
- `t`: nome della variabile
- `"sono un testo"`: valore assegnato alla variabile

Il simbolo '=' permette di assegnare il valore presente alla sua destra alla variabile presente alla sua sinistra.

Ogni istruzione deve terminare con il simbolo ';'

Riassumendo, l'istruzione permette di assegnare il valore "sono un testo" alla variabile t di tipo text.

Una sintassi alternativa consiste nell'assegnare il valore della variabile in un momento successivo rispetto alla sua dichiarazione al posto di fare tutto sulla stessa riga:

```java
text t;

// ALTRO CODICE...

t = "testo";
```

### Tipi
MALT è un linguaggio un po' diverso dagli altri linguaggi classici. Qui non esistono variabili che contengono valori numerici (int, float, double...) perché MALT è incentrato completamente sulla manipolazione testuale.

Invece di avere molti tipi che gestiscono valori numerici, qui esistono molti tipi che gestiscono stringhe di testo. Come visto sopra, per assegnare il tipo di una variabile basta scriverlo prima del nome nella dichiarazione.

| Tipo         | Descrizione              |
| ------------ | ------------------------ |
| `text`       | Testo semplice           |
| `title`      | Titolo                   |
| `s1title`    | Sotto titolo 1           |
| `s2title`    | Sotto titolo 2           |
| `s3title`    | Sotto titolo 3           |
| `s4title`    | Sotto titolo 4           |
| `s5title`    | Sotto titolo 5           |
| `blockquote` | Blocco citazione         |
| `olist`      | Lista ordinata           |
| `ulist`      | Lista non ordinata       |
| `tlist`      | Lista delle cose da fare |
| `codeblock`  | Blocco di codice         |
| `table`      | Tabella                  |
| `image`      | Immagine                 |
| `link`       | Link                     |
| `list`       | Lista / Array            |

Nei successivi paragrafi verrà spiegato l'utilizzo di tutti i tipi appena elencati.

### Variabili primitive testuali

Vengono definite variabili primitive testuali tutte quelle variabili che contengono direttamente una stringa di testo. Il tipo `text` visto prima ne è un esempio.

L'aggettivo "primitive" si riferisce al fatto che questi tipi possono contenere una ed una sola stringa di testo e non ad esempio una lista di stringhe o una tabella che contiene stringhe.

Le variabili primitive testuali sono le seguenti:
- `text`
- `title`
- `s1title`
- `s2title`
- `s3title`
- `s4title`
- `s5title`
- `blockquote`
- `codeblock`

L'assegnamento per queste variabili funziona in questo modo:

```java
tipo_pr_test nome_var = "valore testuale";
```

dove tipo_pr_test è uno dei tipi elencati sopra.

Come già detto, l'assegnazione e la dichiarazione posso essere separate.















