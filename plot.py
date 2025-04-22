import matplotlib.pyplot as plt

volumes = [i/100 for i in range(10, 100)]
times = list(map(float, input("Enter the times: \n").split(",")))
print(times, volumes)

plt.plot(volumes, times, marker="x")
plt.ylabel("Time taken for rocket to land (s)")
plt.xlabel("Volume of water (l)")
plt.grid(True)
plt.show()
