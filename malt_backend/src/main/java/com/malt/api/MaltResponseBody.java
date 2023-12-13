package com.malt.api;

import java.util.Hashtable;

import com.malt.grammar.compiler.util.VarDescriptor;

// classe che descrive la risposta del server al client
public class MaltResponseBody {
    private String message;
    private Hashtable<String, VarDescriptor> globalTable;
    private Hashtable<String, Hashtable<String, VarDescriptor>> localTables;

    public MaltResponseBody() {
        this.message = "";
        this.globalTable = new Hashtable<>();
        this.localTables = new Hashtable<>();
    }

    public MaltResponseBody(String message) {
        this.message = message;
        this.globalTable = new Hashtable<>();
        this.localTables = new Hashtable<>();
    }

    public MaltResponseBody(String message, Hashtable<String, VarDescriptor> globalTable,
            Hashtable<String, Hashtable<String, VarDescriptor>> localTables) {
        this.message = message;
        this.globalTable = globalTable;
        this.localTables = localTables;
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
        return this.globalTable;
    }

    public void setLocalTables(Hashtable<String, Hashtable<String, VarDescriptor>> localTables) {
        this.localTables = localTables;
    }

    public Hashtable<String, Hashtable<String, VarDescriptor>> getLocalTables() {
        return this.localTables;
    }
}
