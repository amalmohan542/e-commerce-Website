var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"MacBook Pro",
      categorey:"Laptops",
      discription:"i9 10th gen, 16 GB Ram, 512 GB SSD",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"Iphone 12",
      categorey:"mobiles",
      discription:"Tripple camera and 4k display",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"Realme 7 Pro",
      categorey:"mobiles",
      discription:"Tripple camera and 4k display",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"MacBook Pro",
      categorey:"Laptops",
      discription:"i9 10th gen, 16 GB Ram, 512 GB SSD",
      image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEBUQEBAQFhUQDxAQEBUQFRIQFRAPFREWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGi0dHR0tMC0tLS0rLS0tLTcrKy0rKy0tLSsrLS0tLSsrLS8tMDIrLS8tLS0tLS0uKy0tLS0rLf/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBgQFBwj/xABNEAABAwICBQgFCAcGBAcAAAABAAIDBBESIQUTMUFRBgdhcYGRocEiMlJysRRCQ1OSssLRFSMzRGKC8GNzg6LS4RaTo/EIJFRks8PT/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EACsRAQACAQMDAwQCAgMAAAAAAAABAhEDElEEITETQWEiMpGhgeFx8AUUFf/aAAwDAQACEQMRAD8A7elCRKESDHBNITymlZUxFlR+dDly/RLI2wxsfLMTYyXwsaBmbDadmV9657T89tc316ekf1CSP8RV2jvNkWXGqXnzd9Lo9v8Ahzn4Fi2sPPdSfSUlW3pbqXj7wTbI6hZIqFBzwaKd6z6hnvwvP3LraU3ORomTZXxNv9YJIvvtCbZMrTZFlqqTlRQTfsq6kd0NmiJ7rrZxzsf6r2O91wd8FMSZOsiydhRZA1CdZLZA2yLJ1kWQIhOsiyBqWyWyLIEshKhAiEqEAhCVAJQEWSoEQlQgRKhCASJUKgSJUIHJUiVVDSmpxSKK4z/4hoPQp5Bue5ve1x/CFpqXkho+aNr9XO3HDG4YZHH0yLuve+WYtlxVv5/afFQxv9idh+LfxrXckTioKc/+3jHa1tvJenQpFvLydVqWpWJry1EfNjTStDmT1DbkixMbsgbXzYCoqnmpJHoVTsjliiDrjseEvKflDU0c4ZC9oYYw4BzGOzLjfMi+4LFpecOsY2wFOQNgwEfBy3PT2z2iMLTVmaxOWPPzWVLfVqIXdbZGd9gVrp+bmube3yd1vZkcPvNCsMfObUWs6nhPuuez43WTFzn+3SH+WW/gWLHoW4/bfqTz+lEqOQukGmxpb7PVkhde/AYrrEdyZrYjf5JUtI3xscSO1l105vObT/Op5+zVO+Lgs6DnF0ec3NnaTtuz/SSpOlbiT1J+HJ46/SEGyXSMdv46lgHeVm0/OFpOPJukp/5yyT7zSurRcutGv/eHt95ko+LbKWXT+jZNtRTm/wBZgH3gszSfn8L6k8R+XOabna0sz94if/eQsP3bLa0vPXXt/aQUj+pskf4irUaDRc+eCgdffhpz4g3TJORGjpBlBB/hvfH91yxMNRqfDW03Pm/6XR7P8OY/AsW0pufClP7SjqW9LXRPHxCwZ+bahtcMkb7szz9661knNpTX9GepHQTE78IUwu+OJXWDnk0W71jUs96Fzvu3W0p+c3RL/wB9Y3+8bJH8Wrk1TzY+laOqda17via7O+zJ4PTsWHNzaz29GeE+817PhiTC76u80vK7R8v7OvpD/isHxK2sFQyQXjex44scHDwXmJ/ICsH1B6nvH3mBZHJIVWhtJUz3jAyaoZBIGva5kkb3Bjg4NO7ECL8FMLmHpqySycQhRTbITkiAsgJUIBCVKmAiLJUKhEJUIBIlQgRCchAiVIlRCFNTimoqh89NNrNFSfwuY7ukYfJVbm4dj0bF/CZmd0z7eFlfOc6DWaKqRwhkd3McVz3milxUDm/V1Mje9jH/AIiu+jbEvN1Nc0aXnKgwyxO4seO4j81UoWE7jbjY2XX+UnJP9JFrRMIjFidcs1mIOsLesLbAtXRc3M9MSW1NM8OGG00Ulsze4wuyOW1er1qxGM93PRr2jLlzskgXR9JchKyR+KOejYLWwskqGi9znZwNjmBt3LGpuQVYH3nbTzMsRZtQYyCfnA4Rc5HI5JGtX4/LpNY9pn8f2oDmpMKvmkOQtQWHVUL2vytaqglZtzuCAdmzNa+k5EVYcRPSVGHCbGAwPIduuC7MbfBa9WuPLO1U7KeKskaMLZHADMC+Q7Fua/ktVMd+ro6wtsM3xHFff6lx4qCl0BISdfHUw2tYmmqJAcjf1RlsHf0K7qzBENa6seQQSCHXviaw5kWvci4PUn/L3ZXbEcLQ0HA1pwgWFy2xKkr9H6oixLwRcnVyx4TwIe0JsFAHtxGenYb2wyvwO67ELPZUkemJGknE4A2ybJKwC3Ah1wrDo+rqWSvjmdMLQyOAE5dq5GQmRrHk3sXXaM+OW9VSrp9W7AXxuuAbxuDxnfK435HJWNnKapjGJ8cLsYGJ2eJ5wxgFxa7gzh853Fc714hqG80pNVNBkp6suxFurhLGSOBccm4gL7LZnfkdy07uWtTES0us8Wu2SJu8Ai9nDr2cER8tXAttA0AHFha9wuRa1jhNrYWjfkCN90yLlXEM3UmfoZ42yCzYy0WBaLXNieNlzik+9VyG8sqioc2J8bDiIHoFzCf8yj5chwginwFro5g6x3EAkHLpaFoYpQKgPaLN14c0ZeizWXAy4DJXbltTYqF5HzcDuwPF/C6XpEROGJti1XeqWYSRskGx7GvHU4A+akK0HN9V67RVHIdppIWn3mtDT4tK35XleoiEqEAiyEqAQhKgEIQgEIQgEIQgEIQgRKmpQiQCkKUpqDV8qINZRzM9qJze/LzXAubTS74IpY22zkY83ttLMP4V6Kr23ieP4D4ZrzDyafqaiePg4tz/AIJHN8120fMOPUR9Euu8mtMOmqMDgM4nEW4gt/3VpmJAu0XO4XtftXN+SFYPlsQ9rWN/6bj5LpZTXjFnLp5+lGwlwuWkZnI2PwTJrNaTa9gTYAEmw2DpU5UUrbggG1wQCNx4ri7y140hCTa2029TiT5hKK2DYC3b7Lhnw2bc099JLb0Z7G1jdjc8yfNGomtnM0nf6DbbB5gntQRithsCHZOJbtfkQLm/DLNK2riJsJdov6zhcXIuCctoOxMdTTgAB0Jyt6TeORJ45LKZTtwgOZHewvZosTns7z3oIjUM2a3M7PTaeP5FR4WPzxNdu+jdc9yndSR3vq2XBvcAA3ve/XdQnR8VrYBsI2m9iLHO91BjP0VE4Zxwu25uiidl3f1dYsvJyldtpaX/AJDPJbCPR0THB7WAOGw3dlkenpWQVcyivSckqInOkgtf5rXMNuwrHm5D6Pd+726nyj8Ss5TSrvtyKg7m/oTsZKOqV3ndY+nqTHSTR/2UjR1hpt4hXJyoWnC5s0rQTbGTt3OF/Nbpabdplz1O2JXjmRq9ZoeIH6KWeLs1hcPB4V7K5T/4e6j/AMrVQE/sqoOHU+MD4xldWK5vURCVCqAJUiVQKhCEUIQhAIQhAIQhAIQhA1KE1KFWYBSIJTbqKbO27XDi1w7wvMFUzV6Uqmf29R4yYh8V6hC8zcs4tVpmf+JzT9qBp+K66Xlz1YzWf8N1yZnw1tOcv27G/a9HzXZiuB6PnwTxP9meJ3dICu/OW+p8w8/T/bJl0xywvk4Gxg7mf6lkwNDcmxkA9Vr9682Xqmse0sH5HL7Yy2enMPC6DTSgizuv9Y/jwwlMGkJvlboDTuEQiEjJ7gtc+4BYRuOZ7ln40ZYJgn9vh9Ju37Y+vwWR8nd9dINn1Z/CpcacUGNqH/XO7Ws8ckrGOBuX3HDCB4hTFNKBpTSgoCIaU0pxTSgjcqRyps2odt9ONjvAt/Crw9Unl23DJE72o3t+y4H8S3p/cxqfaTmLnwaRroL5PjZKB7sh/wD0C7YV595rajV6faL5T08zOs4A4f8Axr0EVLeXes/TBEJEIpUoSXQFA5CEIoQhCAQhCAQhCAQhCCIFOCjTwVqWSEpLpCUiyp115352YsGly722xu8XM/CvQ11wjnyhw18T/ahA+zIXf/YFuk90vGYVN8hDSRuF+1ei4ZMbGu9pjXd4BXm9xyXoHkxNrKGmfvdSwE9erbddup9nk0PdlyWFzZxtnkCb34AbUr5Q3blmGjcCTwUpQvK9Cpcu9MTUjYjAWAySFri9uPIMLrAXHBV3R3KqqkdZ8sQbxEOx3T6exbjnPjvTxu9mdh+0HM/EqDTylrXXzysO1c5tNbxPmOH6H/i+j0Oo6e2+vfM9/wCIXCt5RVMTHSGaHBG6QPJht6rRhI9PO5c0dqrLucrSIJGGmuNg1Ulz/nW70nQl0FPcPwyN1jwN0mAAAgbdp7hwVf8AkkcJddzSbEXJF819/wD6enekWrGHwug6adW15vbtEzH48fl1uhrNa1pItjjZK22xzHtBuOomx7OKyCtJyZu/R9K9ubooGNb/ABYG4HNJ6cPfY7luY5A9ocNhFx/v0r4sxicOcxiTSo5H4RexOexouVI5YOmYnvp5WREh7o3BpF79IFiMyLjbvURMJyTbA8X3kWAy61Jn0Kpck6OaGF7ZHOLQ4Bofiu14uHWxbjcdy3J/rYkjYuBVQ5xWfqYn+zMW9jmE/hCsdO4EgYBcb7/7dS03L+O9BIR8x8T/APqBp8HFapOLQlvDnvJmp1OmKGW/7yyMn3yY/wAa9NleSp6jVyRTfVTRyfZcHfhXrJrg4Bw3gEdRWrx9TdPtgpKS6CkUbOTgmBOAUDglSBKooQhCAQhCAQhCAQhCDGBTwogU8FaZBKbdBKbdZaOXGOf+Gz6aTjr2/wCWK33SuygrlvP3Belhf7E7B9pkt/gFaeUlykG4/LNd25u5sei6Y+yx7PsSvb5LgkTrtHUPgu3c0cmLRgH1dROzvcH/AI16NfvWJeXSjEytqQKQtSYV5HZT+cqK9Geh8bvsyMPkVzWkieJWsLcXpbNtwcrLtWntENq4XQPc5oeCLttcXBGV1XYOQDGOx/K57gED0Ydh/lSva9Znx7vpdJ1tdDp9WnfdPjjx7/pUdI6eL3vg9JurDcTDY4hlctO/cbcBvWgfNHJ+rmJyJaHDItN+PBdHm5t4Hy651TVY8sxqW7BbZq0x/NhRk3dLVEnM+lGPgxfa/wDR0oriIl8/o7zoaey0Z/3v/TL5u24aBkZdi1Us7L8QZXPb4PC3FOMOe6R7z1OxGx6iPHrSaA0HFQw6mHWFpe6QmR2I4iANthlZoUwoSBYSSgDYPQNhwuW3XyLzE2mY8TKWmJmZjwc4JiDSH6yXvb5BLHTYTfE8+8bjuWWVfpOUcVRLJT4HtkiGIteQLtByzaTYkelYXyWaJQ3MNz95xy7lrabk7Sw17qoSuxmIs1d/RGQBN9pIFhbd1rbGrhZnitfLO/HpSQMqbmxFvtHyWFyng1lFUNG008pHvBpcPEBZT9LwDbLGOtzR5qKfS9IWlrqqns5pB/Wx7CLcUgcEqziYQvU/JGs1+j6Wb6ykgcesxi/jdeWJPVtlkLZb7L0NzRV2s0NT32x66HsZM8Dwsut/LdPC6kpFHjShyy0mCcFC1ykDklDwlTWuCcstBCEIBCEIBCEIBCEIMAFPa5RWQ51grMoeSkusY1B4IEt1jKsm6onPNT49GuPsPZJ3OA/EVcsZ6PFV3l/DraCZmVywW+20+S1pzm0QlvDz5Tu9EdSsvJzltVaOidDTthLXyGU61j3kOLWtNrOGVmhaCLRdUBYQP7bDzUw0RVn6Dvc3/UvXmJjEw881nMzC1O509In/ANKOqJ3m9Qv5zdJH6SEdULPO6rzdA1Z+Ywdbm+RTv+Hao/VDrcfyWdteP0135byfnD0mQCKkD3YoP9Kw38vdJn99f2MhH4FjDk7PhsXxjqJPkmDkvLvmZ2AlNscH8pX8ttJH9+m7MDfg1Qv5WaQO2uqeyRw+CeOSz9847GH80v8AwwBtnd9kDzU2/C5jlhycoq122tq/+dL+ax36XqTtqqk9c0v+pbeDkxG5waagi+9xa0DLeVku5IwN9ari6RrWE7d1hmptnhcwrTq6Y7Zpj1yPPmozK47Xu7XH81vZ9C0rHEazFbe1xIPgozo+lG4971MK0Rtv8Uej0eC3gpqX2R3u8ygCm3Rs8PMqLDSgt6E8Ob3hbYSwDYxmXQ1HyqLc1mXR/splWmfINi7bzCz49HzRn6Ksdb3XxMPxDlyxlU07AOwE+S6LzY6U+TMmcAHCV0WRIZYsDtgJ/i8FJlXV9WOAS2Wih5TQvyLXX34SH27lmxaShdskAPB+XxUGxzSYyNxTYiDswu6iD8FMAOHwRCMlUgeeHimGPqQL8B2IHGYjcO9ObN/Vwmay+3xCXVjdZQSCQcUawcVHgPFKAehFO1zeITw4HYQmWCLJgSIUaEwMSzDvenNiadjj4qLVdac1hHFMJk40rfaTPkR3OHepsHSkMfSphUXyN3R3rD0roZ88L4wWAvY5rSSciWkX2dN1sNWfaTXscBk89iRGJzCzLlOm+RekqaLWiWjeBYOa3G058C/I+CpNXX1cZs8Yf5WgW4gkEFds05QSzNwmS7b3s4Xz71S6zQM0bcLWNe0bG2wi110325Y2xw50dPz7C4i29wY3yUP6dn3vOeWWG3gFZa+hjabSRvjPVdvmFr5NCNcLxuuP4D5bFN88rtjhppNLTH55PUXjNIa6VzcWseO1x+JWTUaNc05gWzy9U9G3JYjaYm/okW4gf0U3GCMqXuuHOItvOY7blRRyOJttv7tx3KeOmc3K2RI2W8VMaHeHZ9OYP5BFYLnODrgnbx2+Ckna7LN2zPO4BWxjosQOMWJ9k7E9tCdjjdoGXHtUzA1L4i5oPG99py3XzSsixNO8jZxtvJst0aEWsPR6r5niQiPR7fnE9YAUyNJDFe7TbZZt7begpzYcJsb2zvv8lYGaPj4u7wPJTM0dHwPaT5JkV1lOWO4jfh3jxTzTYSCM9hO3uIOSszKCP2B3u/NTsomew3uv8UyKzSU9nAjrOL0R33srxo6LDGHsNiSCQTG644g6zIdXcnUFIwH1G/ZCs1LYDIDsSZVpXNEgxNyc033uHYHNt4JQZTcao3GfomVgcOtsNr9F1YcSSw/7ZKDVxumHqRvBtkSThv2vB8As+i0jWsJxOuMsNwy3SCC9ylz49+acCeHcg2VJp2b6SOI9V7nuyC2MWnmH1oiPds78lXcfX2pQ5Mi2xaUgd84D3gR47FlxuY71S0+6QfgqPiCTXAfOA7VUX2yFRmacLMhOeq5d4FZ9Lyhndsic/p1bh45BXEi07EmMcVj0dUXsDnswON7tJDrdoUpc0/8AZA/GOKFFZn9XQgfZCdZD23CgahYxCREyykyR1hu7U2NgcFFU0zTkbqwIqghwtYdyg1Q/oBDtHt4u70w0bBkXkfzKjHrdERTCz2g+SqelORLAcTbjg5t2ntIV1FMz2z3pTTM9s9pBUwZcrq+T1Qz1XB44SC/iFp5tGO2Ohc0/wekO5dqNDGfn+IWPLoWJ21w8FMLlxF1AfmkHo2HuUepI2gjrXZKvkvDIM8J6Ta60VZyMI/Zvy4Os8eOandXPmMUgarSzk4Y3frYHPb/YvDT3O/NElFSsGdFpEnoMdu+6VpM+Em0QrGFIWqyxxs+ZouY/3stvgtjRUMj9mj6VnDGXPW/Rsx6kKSGqeKN24HsBK6HHoSr3NpGe7ED8VkN0BVnbVYfcYxvkr6Xyb/hQoKOZ2yGQ9TXfks+LRM5+iePesPirkOSj3evV1B6nYfgnjkVAfWdI73nuPmr6deTdPCsQUTmeuY2+89g81liuhZ608PY6/wAFY4uRtKPoWnrzWdDydgb6sLB/KE20M2U1uloLn0ybWthY91+4J40i0+rFUO6oyPvK9R6LYNjGjsCmbRAbvAJ9B9Sha+Y+rSTfzFjfMqYsq3MAbSxtNyS58jiSOFgLK9ClCk+ThXdXgxPLno0VXu2vgb1Nc74lKdAVJ9erI92No8SCugimCdqRwTfHBt+VAZyXv69VOep2H4BSs5H059Z0jvekkPhdXc0jOHcmOpeFk9STYruj+T8MH7MAXzyJ29S20MIHBZWG24dwT2ubvCzNsrEBrBbalxEbwVI0NOyyUsHALLSLXHoSKTD/AA/BCA1/QjX9ClDhwRccFBiyOub2UdlnXHBJccFDDDY6xupJM8wpyRwUD3jgqIsKiqKbELjaFkawdKe14VGlIttShbGrYDmBmsMozMJoII3jZYqT5AzpWIAQbglbKmkxBFQfo5nSj9HN6VmJbIuGD+jGbwUfotnSs+yWyZTENf8Ao1nT4JRQM6Vn4Qm4ArkwhjjDcrk9aen6tNwFMhqRKQkQSRKdRRNU6zKmprm33nsT0KDGexw3kqPGeJWbZNcwHaFcmGKHnipGtcfnIfBbYotiqJsDuKMDuKa2Y71O111FRYHcUzUHoWSQo3MO4lMiLUHoTmscN6YXkb0msPFVE/pcAhQaw8UIP//Z"
    }

  ];  
  res.render('index', { products,admin:false });
});

module.exports = router;
