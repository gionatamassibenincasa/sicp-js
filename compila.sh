#!env bash
while [[ $# -gt 0 ]];
do
    opt="$1";
    shift;              #expose next argument
    case "$opt" in
        "html" )
            echo "Compilazione in HTML"
            asciidoctor --verbose -r asciidoctor-diagram -a  attribute-missing=warn --failure-level=INFO sicp-js-it.adoc;;
        "pdf" )
            echo "Compilazione in PDF"
            asciidoctor-pdf --verbose -r asciidoctor-diagram -r asciidoctor-mathematical -a mathematical-format=svg -a rouge-style=github -a attribute-missing=warn --failure-level=INFO -a pdf-stylesdir=resources/themes -a pdf-style=sicpit -a pdf-themesdir=resources/themes -a pdf-fontsdir=resources/fonts -a pdf-theme=sicpit sicp-js-it.adoc;;
        "pdf-fop" )
            echo "Compilazione in DookBook e PDF"
            asciidoctor --verbose -b docbook5 -r asciidoctor-diagram -r asciidoctor-mathematical -a mathematical-format=svg -a rouge-style=github -a attribute-missing=warn --failure-level=INFO sicp-js-it.adoc
            fop -xml sicp-js-it.xml -xsl resources/fop/docbook-xsl/fo-pdf.xsl -pdf sicp-js-it-fop.pdf;;
         *) echo >&2 "Opzione non valida: $@"; exit 1;;
    esac
done
