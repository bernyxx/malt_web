package com.malt.api;

import java.util.Hashtable;

import com.malt.grammar.compiler.util.VarDescriptor;

public class MaltResponseBody {
    private String message;
    private Hashtable<String, VarDescriptor> globalTable;
    private Hashtable<String, Hashtable<String, VarDescriptor>> functionsTable;

    public MaltResponseBody() {
        this.message = "";
        this.globalTable = new Hashtable<>();
        this.functionsTable = new Hashtable<>();
    }

    public MaltResponseBody(String message) {
        this.message = message;
        this.globalTable = new Hashtable<>();
        this.functionsTable = new Hashtable<>();
    }

    public MaltResponseBody(String message, Hashtable<String, VarDescriptor> globalTable,
            Hashtable<String, Hashtable<String, VarDescriptor>> functionsTable) {
        this.message = message;
        this.globalTable = globalTable;
        this.functionsTable = functionsTable;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return this.message;
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
