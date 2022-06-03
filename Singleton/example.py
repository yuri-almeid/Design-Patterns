class singleton(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            instance = super().__call__(*args, **kwargs)
            cls._instances[cls] = instance
        return cls._instances[cls]

class resource(metaclass=singleton):
    def __init__(self):
        print("Loading resource...")

if __name__ == '__main__':
    res1 = resource()
    res2 = resource()

    print(res1 == res2)