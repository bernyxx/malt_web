package com.malt.api;

import java.io.IOException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.malt.grammar.compiler.util.ParserResult;
import com.malt.grammar.launchers.MaltStringParserTester;
import com.malt.grammar.launchers.MaltStringScannerTester;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ApiController {

    MaltStringScannerTester mst = new MaltStringScannerTester();
    MaltStringParserTester mpt = new MaltStringParserTester();

    @PostMapping("/lexer")
    public MaltResponseBody launchLexer(@RequestBody MaltRequestBody body) throws IOException {
        String result = mst.runScanner(body.getContent());
        return new MaltResponseBody(result);

    }

    @PostMapping("/parser")
    public MaltResponseBody launchParser(@RequestBody MaltRequestBody body) throws IOException {
        ParserResult result = mpt.runParser(body.getContent());
        return new MaltResponseBody(result.parserResult, result.globalTable, result.functionsTable);
    }
}
