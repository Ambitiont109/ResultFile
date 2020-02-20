import threading


class ClientHandler(object):
    """
    The client handler class receives and process client requests
    and sends responses back to the client linked to this handler
    """

    def __init__(self, server_instance, clienthandler, addr):
        """
        Class constructor already implemented for you.
        :param server_instance:
        :param clienthandler:
        :param addr:
        """
        self.clientid = addr[1]  # the id of the client that owns this handler
        self.server_ip = addr[0]
        self.server = server_instance
        self.clienthandler = clienthandler

    def print_lock(self):
        """
        create a new print lock
        :return: the lock created
        """
        print("============")
        lock = threading.Lock()
        return lock

    def process_client_data(self):
        """
        receives the data from the client
        prepares the data to be printed in console
        create a print lock
        adquire the print lock
        prints the data in server console
        release the print lock
        :return: VOID
        """
        if not self.clienthandler:
            return
        received_data_bytes = b''
        lock = self.print_lock()

        while True:
            # receive data from client
            # if no data, break the loop
            # Otherwise, send acknowledge to client. (i.e a message saying 'server got the data'
            data = self.clienthandler.recv(4096)
            if not data:
                break
            lock.acquire()
            print(data + str(self.clientid).encode('utf8'))
            lock.release()
            reply_msg = "received from " + str(self.clientid)
            self.clienthandler.send(reply_msg.encode('utf8'))
