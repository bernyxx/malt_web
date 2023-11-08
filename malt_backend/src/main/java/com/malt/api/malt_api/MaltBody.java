package com.malt.api.malt_api;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MaltBody {

    public String content;

    public MaltBody(@JsonProperty("content") String cont) {
        this.content = cont;
    }
}
