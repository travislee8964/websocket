websocket
=========

samples of websocket package

### Environment
install golang
```
export GOPATH=/opt/go
mkdir -p /opt/go
go get golang.org/x/net/websocket
```

### Compile websocket-chat
```
cd /data
git clone <url>
cd websocket/websocket-chat/src
go build -o websocket-chat main.go
```