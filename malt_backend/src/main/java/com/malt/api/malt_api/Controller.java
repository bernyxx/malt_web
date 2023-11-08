package com.malt.api.malt_api;

import java.io.IOException;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.malt.antlr.MaltParserTester;
import com.malt.antlr.MaltScannerTester;

@RestController
public class Controller {

    MaltScannerTester mst = new MaltScannerTester();
    MaltParserTester mpt = new MaltParserTester();

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
