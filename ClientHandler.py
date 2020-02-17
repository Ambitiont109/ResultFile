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
        while True:
            # receive data from client
            # if no data, break the loop
            # Otherwise, send acknowledge to client. (i.e a message saying 'server got the data'
            data = self.clienthandler.recv(4096)
            if not data:
                break
            received_data_bytes = received_data_bytes + data
        received_data_string = received_data_bytes.decode('utf-8')
        lock = self.print_lock()
        lock.acquire()
        print(received_data_string)
        lock.release()
