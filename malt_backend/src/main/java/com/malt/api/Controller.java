package com.malt.api;

import java.io.IOException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.malt.grammar.launchers.MaltStringParserTester;
import com.malt.grammar.launchers.MaltStringScannerTester;

@RestController
public class Controller {

    MaltStringScannerTester mst = new MaltStringScannerTester();
    MaltStringParserTester mpt = new MaltStringParserTester();

    @PostMapping("/launch-lexer")
    public String launchLexer(@RequestBody MaltBody body) throws IOException {
        String result = mst.runScanner(body.content);
        return result;

    }

    @PostMapping("/launch-parser")
    public String launchParser(@RequestBody MaltBody body) throws IOException {
        String result = mpt.runParser(body.content);
        return result;
    }
}
