# don't modify this imports
import socket
import pickle
from ClientHandler import ClientHandler
from threading import Thread
from _thread import start_new_thread

class Server(object):
    """
    The server class implements a server socket that can handle multiple connections.
    It is really important to handle any exceptions that may occur because other clients
    are using the server too, and they may be unaware of the exceptions occurring. So, the
    server must not be stopped when a exception occurs. A proper message needs to be show in
    the
    server console.
    """
    MAX_NUM_CONN = 10  # keeps 10 clients in queue

    def __init__(self, host="127.0.0.1", port=12000):
        """
        Class constructor
        :param host: by default localhost. Note that '0.0.0.0' takes LAN ip address.
        :param port: by default 12000
        """
        self.host = host
        self.port = port
        self.serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # create the server socket

    def _bind(self):
        """
        # bind host and port to this server socket
        :return: VOID
        """
        server_address = (self.host, self.port)
        self.serversocket.bind(server_address)

    def _listen(self):
        """
        # puts the server in listening mode.
        # if succesful, print the message "Server listening at ip/port"
        :return: VOID
        """
        try:
            self._bind()
            self.serversocket.listen(self.MAX_NUM_CONN)
        except Exception as e:
            self.serversocket.close()

    def _handler(self, clienthandler):
        """
        # receive, process, send response to the client using this handler.
        :param clienthandler:
        :return:
        """

        while True:
            # receive data from client
            # if no data, break the loop
            # Otherwise, send acknowledge to client. (i.e a message saying 'server got the data'
            data = clienthandler.recv(1024)
            if not data:
                break
            acknowledge_msg = b'Server got the data'
            print(data)
            clienthandler.send(acknowledge_msg)

    def _accept_clients(self):
        """
        # Handle client connections to the server
        :return:VOID
        """
        while True:
            try:
                clienthandler, addr = self.serversocket.accept()
                # from the addr variable, extract the client id assigned to the client
                # send assigned id to the new client.
                clientid = addr[1]
                self._send_clientid(clienthandler, clientid)

                handler = ClientHandler(self, clienthandler, addr)
                start_new_thread(handler.process_client_data,()) 

                # self._handler(clienthandler)
            except Exception as e:
                print(e)
                # print("got except while accept client")

    def _send_clientid(self, clienthandler, clientid):
        """
        # send the client id to a client that just connected to the server.
        :param clienthandler:
        :param clientid:
        :return: VOID

        """
        data_str = "ClientId:" + str(clientid)
        data = data_str.encode()
        clienthandler.send(data)

    def send(self, clienthandler, data):
        """
        # Serialize the data with pickle.
        # call the send method from the clienthandler to send data
        :param clienthandler: the clienthandler created when connection was accepted
        :param data: raw data (not serialized yet)
        :return: VOID

        """
        pickled_data_bytes = pickle.dumps(data)
        clienthandler.sendall(pickled_data_bytes)

    def receive(self, clienthandler, MAX_ALLOC_MEM=4096):
        """
        # Deserialized the data from client
        :param MAX_ALLOC_MEM: default set to 4096
        :return: the deserialized data
        """
        received_data = b''
        while True:
            # receive data from client
            # if no data, break the loop
            # Otherwise, send acknowledge to client. (i.e a message saying 'server got the data'
            data = clienthandler.recv(self.MAX_ALLOC_MEM)
            if not data:
                break
            received_data = received_data + data
        try:
            return pickle.loads(received_data)
        except:
            print("Deserilization Error From Received Data")
            return None

    def run(self):
        self._listen()
        self._accept_clients()


if __name__ == '__main__':
    server = Server()
    server.run()
