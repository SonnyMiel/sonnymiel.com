FROM nginx:1.17.0

COPY nginx.conf /etc/nginx/

RUN rm -rf /usr/share/nginx/html/*

COPY dist/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
