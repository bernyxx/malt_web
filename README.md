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
    - [Testo semplice (*text*)](#testo-semplice-text)
    - [Titolo e varianti](#titolo-e-varianti)
    - [Blocco citazione (*blockquote*)](#blocco-citazione-blockquote)
    - [Blocco di codice (*codeblock*)](#blocco-di-codice-codeblock)
  - [Variabili lista](#variabili-lista-1)
    - [Lista ordinata (*olist*)](#lista-ordinata-olist)
    - [Lista non ordinata (*ulist*)](#lista-non-ordinata-ulist)
    - [Lista con caselle di spunta (*tlist*)](#lista-con-caselle-di-spunta-tlist)
    - [Lista (*list*)](#lista-list)
  - [Variabili Multimediali](#variabili-multimediali-1)
    - [Tabella (*table*)](#tabella-table)
    - [Link (*link*)](#link-link)
    - [Immagine (*img*)](#immagine-img)
  - [Conversione tra Tipi (Type Casting)](#conversione-tra-tipi-type-casting)
  - [Cicli](#cicli)
    - [Ciclo for](#ciclo-for)
    - [Ciclo for-each](#ciclo-for-each)
  - [Scope delle variabili](#scope-delle-variabili)

# Introduzione

MALT è un linguaggio che consente di ottenere un file Markdown a partire da un nuovo linguaggio procedurale.

Markdown è un linguaggio di markup e non consente l’utilizzo di liste, cicli, classi, funzioni e tutte quelle funzionalità che sono presenti nei linguaggi di programmazione.
MALT permette di unire le funzionalità tipiche dei linguaggi di programmazione con la potente formattazione e strutturazione del testo tipica invece dei linguaggi di markup.

Per poter eseguire il codice MALT è stata predisposta un’interfaccia web in cui è possibile scrivere direttamente oppure importare un file che contiene il codice che si vuole eseguire.

# Installazione

Per installare ed eseguire l’ambiente che permette di eseguire il codice MALT sono disponibili diverse alternative: l'esecuzione in modalità sviluppatore direttamente dagli script contenuti nel codice sorgente oppure l'esecuzione dell'ambiente pronto alla produzione tramite container Docker di immagini già costruite e pronte da utilizzare.

## Esecuzione da codice sorgente

Il metodo piu semplice per utilizzare l'ambiente è quello di eseguire gli script utilizzati per provare il programma durante la fase di sviluppo. Questa modalità però non permette di simulare un ambiente reale con tutte le ottimizzazioni che i framework usano dopo aver eseguito il "build".
Il programma si divide in due parti: analizzatore (back-end) e interfaccia (front-end).

> Per il front-end è stato utilizzato Next.js che richiede l'installazione di Node.js e di npm sul sistema. Per scaricare Node.js basta andare a [questo indirizzo](https://nodejs.org/en/download). L'installazione di Node.js solitamente include già npm.

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

## Installazione tramite Docker

Le immagini Docker sono un modo pratico e veloce per creare dei container che contengono già tutto il codice e le dipendenze necessarie per eseguire l'ambiente MALT senza installare nulla oltre al motore Docker.

> Per completare l'installazione tramite Docker è necessario avere Docker Engine installato sul proprio computer. Se non si è esperti con i comandi Docker all'interno del terminale si consiglia caldamente di installare l'interfaccia Docker Desktop che integra il sopracitato Docker Engine. I passaggi successivi della guida faranno riferimento all'interfaccia. La guida di installazione di Docker Desktop può essere trovata a questo [link](https://docs.docker.com/desktop/).

> Prima di eseguire i comandi per scaricare le immagini, assicurarsi di avere in esecuzione in background Docker Engine. Se avete installato Docker Desktop basterà avviarlo e in automatico verrà eseguito anche Docker Engine.

Per scaricare l'immagine più recente del backend che esegue l'analisi lessicale, sintattica e semantica eseguire il comando

```shell
docker pull ghcr.io/kevin-bernardi/malt_backend:main
```

Invece, per scaricare l'immagine più recente del frontend, eseguire il comando

```shell
docker pull ghcr.io/kevin-bernardi/malt_frontend:main
```

Se non ci sono stati errori durante il download delle immagini dovrebbero essere comparse due immagini nella sezione "Images" di Docker Desktop.

Per creare ed eseguire i container, sempre dalla sezione "Images" fare click sul tasto "Play" in fondo alla riga dell'immagine malt_backend. Aprire la sezione "Optional settings", inserire un nome a piacere nel campo "Container name" e inserire obbligatoriamente 8080 nel campo "Host port". Il resto va lasciato vuoto.
Fare la stessa cosa per l'immagine malt_frontend specificando questa volta una "Host port" a piacere.

Nella sezione "Containers" ora si potranno vedere i due container in esecuzione.

L'installazione dell'ambiente è completata ed ora sarà possibile utilizzare l'interfaccia web all'url <localhost:PORT> dove PORT è la "Host port" specificata nella creazione del container basato sull'immagine malt_frontend.

# Linguaggio MALT

Nei seguenti capitoli verranno esposte le funzionalità del linguaggio in ordine di difficoltà partendo dalle variabili e arrivando alla fine ad utilizzare tutto quello che serve per affrontare i casi d'uso più comuni.

## Variabili

La dichiarazione di variabili avviene in questo modo:

```java
tipo nome_variabile = valore;
```

Ecco un esempio:

```java
text t = "sono un testo";
```

Analizziamo parola per parola questa istruzione:

- *`text`*: tipo della variabile. *`text`* rappresenta testo semplice (vedi sotto quali sono i tipi disponibili)
- *`t`*: nome della variabile
- *`"sono un testo"`*: valore assegnato alla variabile

Il simbolo *`'='`* permette di assegnare il valore presente alla sua destra alla variabile presente alla sua sinistra.

Ogni istruzione deve terminare con il simbolo *`';'`*

Riassumendo, l'istruzione permette di assegnare il valore *`"sono un testo"`* alla variabile *`t`* di tipo text.

Una sintassi alternativa consiste nell'assegnare il valore della variabile in un momento successivo rispetto alla sua dichiarazione al posto di fare tutto sulla stessa riga:

```java
text t;

// ALTRO CODICE...

t = "testo";
```

## Tipi

MALT è un linguaggio un po' diverso dagli altri linguaggi classici. Qui non esistono variabili che contengono valori numerici (int, float, double...) perché MALT è incentrato completamente sulla manipolazione testuale.

Invece di avere molti tipi che gestiscono valori numerici, qui esistono molti tipi che gestiscono stringhe di testo. Come visto sopra, per assegnare il tipo di una variabile basta scriverlo prima del nome nella dichiarazione.

I tipi sono organizzati in 3 diverse categorie che verranno esposte di seguito.

### Variabili Primitive Testuali

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

### Variabili Lista

| Tipo    | Descrizione                 |
| ------- | --------------------------- |
| `olist` | Lista ordinata              |
| `ulist` | Lista non ordinata          |
| `tlist` | Lista con casella di spunta |
| `list`  | Lista / Array               |

### Variabili Multimediali

| Tipo    | Descrizione |
| ------- | ----------- |
| `table` | Tabella     |
| `link`  | Link        |
| `image` | Immagine    |

Nei successivi paragrafi verrà spiegato l'utilizzo di tutti i tipi appena elencati.

## Variabili Primitive Testuali

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

### Testo semplice (*text*)

*`text`* rappresenta del testo semplice, tutto quello che non è un titolo, una tabella, un'immagine, un codeblock...

In un *`text`* possiamo anche eseguire la formattazione del testo usando la stessa sintassi di Markdown:

- Grassetto: \*\* o \_\_ attorno al testo;
- Corsivo: \* o \_ attorno al testo;
- Grassetto e corsivo: \*\*\* o \_\_\_ attorno al testo.

Ecco un esempio di un *`text`* con formattazione:

```java
text t = "*Stringa* **con** ***formattazione***";
```

corrisponde in Markdown a:

*Stringa* **con** ***formattazione***

### Titolo e varianti

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

### Blocco citazione (*blockquote*)

Un *`blockquote`* è un blocco di testo dove viene inserita una citazione o del testo importante che si deve notare.

```java
blockquote bc = "Testo importante!";
```

corrisponde in Markdown a:

\< Testo importante!

che verrà mostrato come:

> Testo importante!

### Blocco di codice (*codeblock*)

*`codeblock`* rappresenta un blocco di codice con supporto a syntax highlighting.
La dichiarazione di un *`codeblock`* si differenzia dalle altre variabili primitive testuali per la presenza di un parametro opzionale nella dichiarazione.
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

## Variabili lista

Vengono definite variabili lista tutte quelle variabili che hanno una lista di testi come valore.

Quindi, al contrario delle variabili primitive testuali, le variabili lista non contengono direttamente una stringa ma una lista di una o più stringhe.

I tipi che definiscono le variabili lista sono le seguenti:

- *`olist`*: lista ordinata
- *`ulist`*: lista non ordinata
- *`tlist`*: lista con casella di spunta
- *`list`*: lista pura

Tra i quattro tipi non ci sono differenze per quanto riguarda la loro dichiarazione o assegnamento.

All'interno della lista possono esserci soltanto stringhe o variabili primitive testuali che verranno risolte in stringhe.

Ecco un esempio:

```java
s3title numero_due = "due";
olist lista_ordinata = ["uno", numero_due, "tre"];

// corrisponde a ["uno", "due", "tre"]
```

Andiamo a vedere più nel dettaglio i vari tipi per variabili lista.

### Lista ordinata (*olist*)

```java
olist animali = ["cane", "gatto", "coniglio", "gallina"];
```

in Markdown viene trasformato in:

1. cane
2. gatto
3. coniglio
4. gallina

### Lista non ordinata (*ulist*)

```java
ulist frutta = ["mela", "pera", "pesca", "arancia"];
```

in Markdown viene trasformato in:

- mela
- pera
- pesca
- arancia

### Lista con caselle di spunta (*tlist*)

```java
tlist cose_da_fare = ["pulire", "_x_lavorare", "mangiare", "dormire"];
```

in Markdown viene trasformato in:

- [ ] pulire
- [x] lavorare
- [ ] mangiare
- [ ] dormire

Automaticamente, i valori della lista sono convertiti in righe senza spunta. 

Aggiungendo il simbolo speciale *`_x_`* all'inizio della stringa viene visualizzata la spunta.


### Lista (*list*)

Rispetto alla _`olist`_, _`ulist`_ e _`tlist`_ la _`list`_ non viene trasformata in una lista in Markdown ma è una lista "pura", una lista che viene solamente utilizzata per raccogliere un insieme di stringhe da usare all'interno del linguaggio in funzioni, cicli ecc...

## Variabili Multimediali

Le variabili multimediali sono tre tipi di variabili che aggiungono elementi extra al documento Markdown: link, immagini e tabelle.

### Tabella (*table*)

Una tabella in MALT viene dichiarata e utilizzata nel modo seguente:

```java
table tabella = [$l,$c,$r] (["uno","due","tre"],["quattro","cinque","sei"],["sette","otto","nove"]);
```

che viene traformata in Markdown come:

| uno     |  due   |  tre |
| :------ | :----: | ---: |
| quattro | cinque |  sei |
| sette   |  otto  | nove |

La dichiarazione è simila a quanto visto fino ad ora: prima dell'uguale viene dichiarata una variabile tabella di tipo table.

Il valore assegnato è invece composto da due parti.
La prima parte è una lista che deve contenere un numero di specificatori pari al numero di colonne della tabella.
Gli specificatori descrivono come devono essere allineati i testi all'interno delle celle della colonna corrispondente.

Gli specificatori sono 3:

| Specificatore | Descrizione             |
| ------------- | ----------------------- |
| `$l`          | Allineamento a sinistra |
| `$c`          | Allineamento al centro  |
| `$r`          | Allineamento a destra   |

La seconda parte invece descrive il contenuto della tabella. Tra le parentesi tonde vengono scritte tante liste quante sono le righe della tabella ed ogni lista è lunga tanto quanto il numero di colonne della tabella.
La prima lista corrisponde all'intestazione della tabella.

> Tutte le liste devono avere la stessa lunghezza (non ci possono essere righe con un numero diverso di colonne dalle altre)

### Link (*link*)

Un link si definisce nel modo seguente:

```java
link link1 =l ("https://google.it", "Google");
```

corrisponde in Markdown a: [Google](https://www.google.it/)

(Questo link potrebbe non funzionare in alcuni formati di visualizzazione. Dove funziona, corrisponde ad
un link che porta a Google)

> N.B. Per l'assegnamento di link si utilizza `=l` invece di `=`

Il primo parametro è l'url dove in link deve reindirizzare.
Il secondo paramentro è il testo visibile del link.

### Immagine (*img*)

Un'immagine si definisce come mostrato di seguito:

```java
img foto =i ("/percorso/immagine.jpg","Disascalia immagine");
img foto_web =i ("https://sitofoto.com/foto_albero.png", "Didascalia immagine web");
```

> N.B. Per l'assegnamento di immagini si utilizza `=i` invece di `=`

Il primo parametro è un percorso locale se si desidera utilizzare un'immagine presente sul computer. Se si desidera utilizzare un'immagine non locale si può inserire l'url della foto come nella seconda riga dell'esempio.

Il secondo parametro permette di specificare una discalia dell'immagine.

## Conversione tra Tipi (Type Casting)

MALT è un linguaggio abbastanza libero nella compatibilità tra tipi diversi e la conversione è sempre **implicita**.

La conversione tra tipi è consentita solamente tra tipi della stessa categoria se la categoria è testuale primitiva o lista.

Le variabili di tipo multimediale rappresentano oggetti troppo diversi per avere un qualche tipo di conversione che funzioni quindi l'assegnamento su queste variabili funziona solo quando il loro tipo è identico.

Ecco alcuni esempi di conversioni:

```java
text testo = "testo";
list numeri = ["uno", "due", "tre"];

s3title titolo = testo;     // CONSENTITO: sia titolo (tipo: s3title) che testo (tipo: text) sono primitivi testuali
codeblock cb = testo;       // CONSENTITO: sia cb (tipo: codeblock) che testo (tipo: text) sono primitivi testuali
codeblock cb2 = titolo;     // CONSENTITO: sia cb2 (tipo: codeblock) che titolo (tipo: s3title) sono primitivi testuali
blockquote bq = cb2;        // CONSENTITO: sia bq (tipo: blockquote) che cb2 (tipo: codeblock) sono primitivi testuali
title titolo2 = numeri;     // ERRORE: titolo2 (tipo: title) è primitiva testuale mentre numeri (tipo: list) è una lista

list l1 = cb;               // ERRORE: l1 (tipo: list) è lista mentre cb (tipo: codeblock) è primitiva testuale
list l2 = numeri;           // CONSENTITO: sia l2 (tipo: list) che numeri (tipo: list) sono liste
ulist ul = numeri;          // CONSENTITO: sia ul (tipo: ulist) che numeri (tipo: list) sono liste
tlist tl = ul;              // CONSENTITO: sia tl (tipo: tlist) che ul (tipo: ulist) sono liste


table tabella = testo;      // ERRORE: tabella (tipo: table) è multimediale mentre testo (tipo: text) è primitiva testuale
img foto = cb;              // ERRORE: foto (tipo: img) è multimediale mentre cb (tipo: codeblock) è primitiva testuale
img foto2 =i ("/img/foto.png", "Foto");
img foto3 = foto1;          // CONSENTITO: sia foto3 (tipo: img) che foto1 (tipo: img) sono dello stesso tipo

table tabella2 = foto3;     // ERRORE: tabella2 (tipo: table) e foto3 (tipo: img) sono entrambe multimediali ma non sono dello stesso tipo

```


## Cicli

In MALT è possibile inserire cicli, in particolare cicli for. Essi possono essere strutturati in due modi differenti: nel primo caso si ripeteono le istruzioni in base ad un certo contatore che rappresenta il numero delle iterazioni, mentre nel secondo caso le iterazioni sono proporzionali alla lunghezza della lista passata.

### Ciclo for

Il ciclo for permette di iterare le istruzioni in esso contenute un numero di volte pari al valore del contatore passato nella condizione.
Ne viene fornito un breve esempio:

```java
text i;

for(i, 3){

  // istruzioni da ripetere

}
```

In ciascuna iterazione del ciclo al contatore *`i`* viene assegnato un valore a partire da 0 e fino al valore *`3`* - 1 (valore massimo - 1).

### Ciclo for-each

Il ciclo for-each consente di eseguire le istruzioni contenute un numero di volte pari alla lunghezza della lista che si sta iterando.
Inoltre, ad ogni iterazione si ha a disposizione il valore dell'elemento ccorrspondente della lista.
Ecco un breve esempio:

```java
list lista_frutta = ["mela", "pera", "banana", "arancia"]; 
text frutto;

for(frutto in lista_frutta){

  // istruzioni da ripetere

}
```

Ad ogni iterazione la variabile *`frutto`* assumerà un valore diverso:
- Prima iterazione: `mela`
- Seconda iterazione: `pera`
- Terza iterazione: `banana`
- Quarta iterazione: `arancia`

Il valore della variabile *`frutto`* potrà poi essere utilizzata per effettuare altre operazioni.


## Scope delle variabili

Lo scope di una variabile definisce l'area in cui quella variabile è valida, definita e visibile.

In MALT non esistono parole chiave per estendere o limitare lo scope.

Lo scope di una variabile si estende sempre a partire dalla dichiarazione fino all'ultima istruzione del blocco dove è stata dichiarata.

Fino ad ora sono definibili solo due possibili blocchi: il blocco globale e il blocco del ciclo for.

Il blocco globale è un blocco sempre presente e si estende per tutto il codice.
Il blocco del ciclo for è invece definito da un ciclo for e si estende per tutte le istruzioni ripetute dal ciclo for.

```java
// inizio blocco globale
text testo_globale;

for(i, 5){
  // inizio blocco del ciclo for
  text testo_locale;

  // altre istruzioni...

  //fine blocco del ciclo for
}

// fine blocco globale
```

Nell'esempio la variabile *`testo_globale`* è definita nel blocco globale ed è visibile in tutto il codice (dopo la dichiarazione).

La variabile *`testo_locale`* è invece definita nel blocco del ciclo for ed è visibile soltanto all'interno del ciclo dopo la dichiarazione della variabile.

Per questo motivo le variabili dichiarate fuori dai cicli vengono definite "globali" mentre le variabili dichiarate nei cicli vengono definite "locali".