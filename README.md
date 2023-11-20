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
      - [Variabili Primitive Testuali](#variabili-primitive-testuali)
      - [Variabili Lista](#variabili-lista)
      - [Variabili Multimediali](#variabili-multimediali)
    - [Variabili Primitive Testuali](#variabili-primitive-testuali-1)
      - [Testo semplice (text)](#testo-semplice-text)
      - [Titolo e varianti](#titolo-e-varianti)
      - [Blocco citazione (Blockquote)](#blocco-citazione-blockquote)
      - [Blocco di codice (Codeblock)](#blocco-di-codice-codeblock)
    - [Variabili Lista](#variabili-lista-1)
      - [Lista ordinata (olist)](#lista-ordinata-olist)


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

I tipi sono organizzati in 3 diverse categorie che verranno esposte di seguito.

#### Variabili Primitive Testuali
| Tipo         | Descrizione      |
| ------------ | ---------------- |
| `text`       | Testo semplice   |
| `title`      | Titolo           |
| `s1title`    | Sotto titolo 1   |
| `s2title`    | Sotto titolo 2   |
| `s3title`    | Sotto titolo 3   |
| `s4title`    | Sotto titolo 4   |
| `s5title`    | Sotto titolo 5   |
| `blockquote` | Blocco citazione |
| `codeblock`  | Blocco di codice |

#### Variabili Lista

| Tipo    | Descrizione                 |
| ------- | --------------------------- |
| `olist` | Lista ordinata              |
| `ulist` | Lista non ordinata          |
| `tlist` | Lista con casella di spunta |
| `list`  | Lista / Array               |

#### Variabili Multimediali

| Tipo    | Descrizione |
| ------- | ----------- |
| `table` | Tabella     |
| `image` | Immagine    |
| `link`  | Link        |




Nei successivi paragrafi verrà spiegato l'utilizzo di tutti i tipi appena elencati.

### Variabili Primitive Testuali

Vengono definite variabili primitive testuali tutte quelle variabili che contengono direttamente una stringa di testo. Il tipo `text` visto prima ne è un esempio.

L'aggettivo "primitive" si riferisce al fatto che questi tipi possono contenere una ed una sola stringa di testo e non ad esempio una lista di stringhe o una tabella che contiene stringhe.

I tipi delle variabili primitive testuali sono le seguenti:
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

dove *`tipo_pr_test`* è uno dei tipi elencati sopra.

> Per codeblock esiste un parametro opzionale in più che può essere inserito tra il tipo e il nome della variabile nella dichiarazione. Consulta la sezione dei codeblock per saperne di più.

Come già detto, l'assegnazione e la dichiarazione posso essere separate.

Verranno ora presentati in dettaglio questi tipi.

#### Testo semplice (text)

*`text`* rappresenta del testo semplice, tutto quello che non è un titolo, una tabella, un'immagine, un codeblock...

In un text possiamo anche eseguire la formattazione del testo usando la stessa sintassi di Markdown.

- Grassetto: ** o __ attorno al testo;
- Corsivo: * o _ attorno al testo;
- Grassetto e corsivo: *** o ___ attorno al testo.

Ecco un esempio di un text con formattazione:

```java
text t = "*Stringa* **con** ***formattazione***";
```

corrisponde in Markdown a: *Stringa* **con** ***formattazione***


#### Titolo e varianti

I tipi *`title`*, *`s1title`*, *`s2title`*, *`s3title`*, *`s4title`*, *`s5title`* fanno parte della categoria dei titoli.

Tra MALT e Markdown c'è la seguente corrispondenza:

| MALT                  | Markdown      |
| --------------------- | ------------- |
| title t = "Titolo";   | # titolo      |
| s1title t = "Titolo"; | ## titolo     |
| s2title t = "Titolo"; | ### titolo    |
| s3title t = "Titolo"; | #### titolo   |
| s4title t = "Titolo"; | ##### titolo  |
| s5title t = "Titolo"; | ###### titolo |

#### Blocco citazione (Blockquote)

Un blockquote è un blocco di testo dove viene inserita una citazione o del testo importante che si deve notare.

```java
blockquote bc = "Testo importante!";
```

corrisponde in Markdown a: 

\< Testo importante! 

che verrà mostrato come:
> Testo Importante!

#### Blocco di codice (Codeblock)

Codeblock rappresenta un blocco di codice con supporto a syntax highlighting.
La dichiarazione di un codeblock si differenzia dalle altre variabili primitive testuali per la presenza di un parametro opzionale nella dichiarazione.
Questo parametro opzionale serve per specificare il linguaggio che viene scritto all'interno del blocco di codice per effettuare syntax highlighting in modo corretto.

Ecco un esempio di un blocco di codice con codice Java al suo interno:

```
codeblock java cb = "
  public class Malt {
    public static void main(String[] args) {
        System.out.println("Testo");
    }
  }
";
```

Visto che il parametro per la specifica del linguaggio è opzionale avremmo anche potuto scrivere

```
codeblock cb = "
  ....
";
```

senza ovviamente utilizzare il syntax highlighting.


### Variabili Lista

Vengono definite variabili lista tutte quelle variabili che hanno una lista di testi come valore.

Quindi, al contrario delle variabili primitive testuali, le variabili lista non contengono direttamente una stringa ma una lista di una o più stringhe.

I tipi che definiscono le variabili lista sono le seguenti:

- *`olist`*: lista ordinata
- *`ulist`*: lista non ordinata
- *`tlist`*: lista con casella di spunta
- *`list`*: lista di stringhe

Tra i quattro tipi non ci sono differenze per quanto riguarda la loro dichiarazione o assegnamento. 

All'interno della lista possono esserci soltanto stringhe o variabili primitive testuali che verranno risolte in stringhe.

Ecco un esempio:

```java
s3title numero_due = "due";
olist lista_ordinata = ["uno", numero_due, "tre"];

// corrisponde a ["uno", "due", "tre"]
```

#### Lista ordinata (olist)





















