package com.malt.api;

import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.malt.grammar.compiler.util.ParserResult;
import com.malt.grammar.launchers.MaltStringScannerLauncher;
import com.malt.grammar.launchers.MaltStringParserLauncher;

// rest api controller
@CrossOrigin
@RestController
@RequestMapping("/api")
public class ApiController {

    MaltStringScannerLauncher msl = new MaltStringScannerLauncher();
    MaltStringParserLauncher mpl = new MaltStringParserLauncher();

    // endpoint per il lexer
    @PostMapping("/lexer")
    public MaltResponseBody launchLexer(@RequestBody MaltRequestBody body) throws IOException {
        String result = msl.runScanner(body.getContent());
        return new MaltResponseBody(result);

    }

    // endpoint per il parser
    @PostMapping("/parser")
    public MaltResponseBody launchParser(@RequestBody MaltRequestBody body) throws IOException {
        ParserResult result = mpl.runParser(body.getContent());
        return new MaltResponseBody(result.parserResult, result.globalTable, result.localTables);
    }
}
