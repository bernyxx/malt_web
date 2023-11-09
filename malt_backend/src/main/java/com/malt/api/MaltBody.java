package com.malt.api;

public class MaltBody {

    private String content;

    public MaltBody() {
        this.content = "";
    }

    public MaltBody(String content) {
        this.content = content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getContent() {
        return this.content;
    }
}
