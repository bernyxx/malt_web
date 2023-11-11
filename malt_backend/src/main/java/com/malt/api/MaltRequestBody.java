package com.malt.api;

public class MaltRequestBody {

    private String content;

    public MaltRequestBody() {
        this.content = "";
    }

    public MaltRequestBody(String content) {
        this.content = content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getContent() {
        return this.content;
    }
}
