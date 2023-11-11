package com.malt.api;

import java.util.Hashtable;

import com.malt.grammar.compiler.util.VarDescriptor;

public class MaltResponseBody {
    private String content;
    private Hashtable<String, VarDescriptor> globalTable;
    private Hashtable<String, Hashtable<String, VarDescriptor>> functionsTable;

    public MaltResponseBody() {
        this.content = "";
        this.globalTable = new Hashtable<>();
        this.functionsTable = new Hashtable<>();
    }

    public MaltResponseBody(String content) {
        this.content = content;
        this.globalTable = new Hashtable<>();
        this.functionsTable = new Hashtable<>();
    }

    public MaltResponseBody(String content, Hashtable<String, VarDescriptor> globalTable,
            Hashtable<String, Hashtable<String, VarDescriptor>> functionsTable) {
        this.content = content;
        this.globalTable = globalTable;
        this.functionsTable = functionsTable;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getContent() {
        return this.content;
    }

    public void setGlobalTable(Hashtable<String, VarDescriptor> globalTable) {
        this.globalTable = globalTable;
    }

    public Hashtable<String, VarDescriptor> getGlobalTable() {
        return globalTable;
    }

    public void setFunctionsTable(Hashtable<String, Hashtable<String, VarDescriptor>> functionsTable) {
        this.functionsTable = functionsTable;
    }

    public Hashtable<String, Hashtable<String, VarDescriptor>> getFunctionsTable() {
        return functionsTable;
    }
}
