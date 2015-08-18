from app import manager
from app.models.models import Motherboard, Gpu, Cpu, Memory, Psu, Hdd, Case, Configs

__author__ = 'darryl'

models = [Motherboard, Gpu, Cpu, Memory, Psu, Hdd, Case]
for m in models:
    manager.create_api(m, methods=['GET', 'POST'])
manager.create_api(Configs, methods=['GET', 'POST', 'PUT', 'DELETE'])