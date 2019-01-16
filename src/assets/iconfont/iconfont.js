(function(window){var svgSprite='<svg><symbol id="icon-check" viewBox="0 0 1024 1024"><path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696C170.208 511.872 149.952 512 137.536 524.608c-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224 0.096 0.096 0.128 0.224 0.224 0.32 2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224l449.184-478.208C901.44 330.592 900.768 310.336 887.904 298.208z"  ></path></symbol><symbol id="icon-back" viewBox="0 0 1024 1024"><path d="M363.840919 472.978737C336.938714 497.358861 337.301807 537.486138 364.730379 561.486138L673.951902 832.05497C682.818816 839.813519 696.296418 838.915012 704.05497 830.048098 711.813519 821.181184 710.915012 807.703582 702.048098 799.94503L392.826577 529.376198C384.59578 522.174253 384.502227 511.835287 392.492414 504.59418L702.325747 223.807723C711.056111 215.895829 711.719614 202.404616 703.807723 193.674252 695.895829 184.943889 682.404617 184.280386 673.674253 192.192278L363.840919 472.978737Z"  ></path></symbol><symbol id="icon-more" viewBox="0 0 1024 1024"><path d="M642.174253 504.59418C650.164439 511.835287 650.070886 522.174253 641.84009 529.376198L332.618569 799.94503C323.751654 807.703582 322.853148 821.181184 330.611697 830.048098 338.370249 838.915012 351.847851 839.813519 360.714765 832.05497L669.936288 561.486138C697.36486 537.486138 697.727953 497.358861 670.825747 472.978737L360.992414 192.192278C352.26205 184.280386 338.770837 184.943889 330.858944 193.674252 322.947053 202.404616 323.610556 215.895829 332.340919 223.807723L642.174253 504.59418Z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M592.457143 490.057143L950.857143 131.657143c29.257143-29.257143 29.257143-73.142857 0-102.4s-73.142857-29.257143-102.4 0L490.057143 387.657143 131.657143 29.257143C102.4 0 58.514286 0 29.257143 29.257143s-29.257143 73.142857 0 102.4l358.4 358.4-358.4 358.4c-29.257143 29.257143-29.257143 73.142857 0 102.4 29.257143 29.257143 73.142857 29.257143 102.4 0l358.4-358.4 358.4 358.4c29.257143 29.257143 73.142857 29.257143 102.4 0 29.257143-29.257143 29.257143-73.142857 0-102.4L592.457143 490.057143z"  ></path></symbol><symbol id="icon-zoom-in" viewBox="0 0 1026 1024"><path d="M1006.933333 17.066667c-11.377778-11.377778-22.755556-17.066667-39.822222-17.066667h-341.333333c-34.133333 0-56.888889 22.755556-56.888889 56.888889s22.755556 56.888889 56.888889 56.888889h204.8l-244.622222 244.622222c-22.755556 22.755556-22.755556 56.888889 0 79.644444 11.377778 11.377778 22.755556 17.066667 39.822222 17.066667s28.444444-5.688889 39.822222-17.066667L910.222222 193.422222V398.222222c0 34.133333 22.755556 56.888889 56.888889 56.888889s56.888889-22.755556 56.888889-56.888889V68.266667c5.688889-17.066667 0-39.822222-17.066667-51.2zM438.044444 585.955556c-22.755556-22.755556-56.888889-22.755556-79.644444 0L113.777778 830.577778V625.777778c0-34.133333-22.755556-56.888889-56.888889-56.888889s-56.888889 22.755556-56.888889 56.888889v341.333333c0 17.066667 5.688889 28.444444 17.066667 39.822222 11.377778 11.377778 22.755556 17.066667 39.822222 17.066667h341.333333c34.133333 0 56.888889-22.755556 56.888889-56.888889s-22.755556-56.888889-56.888889-56.888889H193.422222l244.622222-244.622222c22.755556-22.755556 22.755556-56.888889 0-79.644444z"  ></path></symbol><symbol id="icon-zoom-out" viewBox="0 0 1024 1024"><path d="M398.222222 568.888889H56.888889c-34.133333 0-56.888889 22.755556-56.888889 56.888889s22.755556 56.888889 56.888889 56.888889h204.8L17.066667 927.288889c-22.755556 22.755556-22.755556 56.888889 0 79.644444 11.377778 11.377778 22.755556 17.066667 39.822222 17.066667s28.444444-5.688889 39.822222-17.066667L341.333333 762.311111V967.111111c0 34.133333 22.755556 56.888889 56.888889 56.888889s56.888889-22.755556 56.888889-56.888889v-341.333333c0-34.133333-22.755556-56.888889-56.888889-56.888889zM967.111111 341.333333h-204.8l244.622222-244.622222c22.755556-22.755556 22.755556-56.888889 0-79.644444s-56.888889-22.755556-79.644444 0L682.666667 261.688889V56.888889c0-34.133333-22.755556-56.888889-56.888889-56.888889s-56.888889 22.755556-56.888889 56.888889v341.333333c0 34.133333 22.755556 56.888889 56.888889 56.888889h341.333333c34.133333 0 56.888889-22.755556 56.888889-56.888889s-22.755556-56.888889-56.888889-56.888889z"  ></path></symbol><symbol id="icon-user" viewBox="0 0 1024 1024"><path d="M512 0C227.555556 0 0 227.555556 0 512s227.555556 512 512 512 512-227.555556 512-512-227.555556-512-512-512z m295.822222 768c-22.755556 5.688889-45.511111-5.688889-51.2-28.444444-28.444444-108.088889-130.844444-182.044444-244.622222-182.044445S295.822222 631.466667 267.377778 739.555556c-5.688889 22.755556-28.444444 34.133333-51.2 28.444444s-34.133333-28.444444-28.444445-51.2c22.755556-96.711111 91.022222-176.355556 182.044445-216.177778-45.511111-39.822222-73.955556-96.711111-73.955556-159.288889 0-119.466667 96.711111-216.177778 216.177778-216.177777s216.177778 96.711111 216.177778 216.177777c0 62.577778-28.444444 119.466667-68.266667 159.288889 91.022222 39.822222 159.288889 119.466667 182.044445 216.177778 0 22.755556-11.377778 45.511111-34.133334 51.2z"  ></path><path d="M512 341.333333m-125.155556 0a125.155556 125.155556 0 1 0 250.311112 0 125.155556 125.155556 0 1 0-250.311112 0Z"  ></path></symbol><symbol id="icon-warn" viewBox="0 0 1024 1024"><path d="M512 0c-283.927273 0-512 228.072727-512 512s228.072727 512 512 512 512-228.072727 512-512-228.072727-512-512-512z m0 930.909091c-232.727273 0-418.909091-186.181818-418.909091-418.909091s186.181818-418.909091 418.909091-418.909091 418.909091 186.181818 418.909091 418.909091-186.181818 418.909091-418.909091 418.909091z"  ></path><path d="M512 246.690909c-27.927273 0-46.545455 18.618182-46.545455 46.545455v265.309091c0 27.927273 18.618182 46.545455 46.545455 46.545454s46.545455-18.618182 46.545455-46.545454v-265.309091c0-27.927273-18.618182-46.545455-46.545455-46.545455z"  ></path><path d="M512 698.181818m-46.545455 0a46.545455 46.545455 0 1 0 93.09091 0 46.545455 46.545455 0 1 0-93.09091 0Z"  ></path></symbol><symbol id="icon-undo" viewBox="0 0 1024 1024"><path d="M910.222222 261.688889c-62.577778-108.088889-164.977778-187.733333-290.133333-221.866667C500.622222 5.688889 369.777778 22.755556 261.688889 85.333333c-34.133333 22.755556-62.577778 45.511111-91.022222 73.955556V56.888889c0-17.066667-11.377778-28.444444-28.444445-28.444445s-28.444444 11.377778-28.444444 28.444445v170.666667c0 17.066667 11.377778 28.444444 28.444444 28.444444h170.666667c17.066667 0 28.444444-11.377778 28.444444-28.444444s-11.377778-28.444444-28.444444-28.444445H210.488889c22.755556-22.755556 51.2-45.511111 79.644444-62.577778 96.711111-56.888889 210.488889-68.266667 318.577778-39.822222s199.111111 96.711111 256 193.422222c113.777778 199.111111 45.511111 455.111111-153.6 574.577778-199.111111 113.777778-455.111111 45.511111-574.577778-153.6-22.755556-39.822222-39.822222-85.333333-51.2-130.844444 0-17.066667-17.066667-28.444444-34.133333-22.755556-11.377778 0-22.755556 17.066667-17.066667 34.133333 11.377778 51.2 28.444444 102.4 56.888889 147.911112 85.333333 153.6 250.311111 238.933333 415.288889 238.933333 79.644444 0 164.977778-22.755556 238.933333-62.577778 108.088889-62.577778 187.733333-164.977778 221.866667-290.133333 22.755556-125.155556 5.688889-256-56.888889-364.088889z"  ></path></symbol><symbol id="icon-pen" viewBox="0 0 1024 1024"><path d="M989.866667 301.511111L722.488889 34.133333c-11.377778-11.377778-28.444444-11.377778-39.822222 0L39.822222 665.6c-5.688889 5.688889-5.688889 11.377778-5.688889 22.755556V967.111111c0 17.066667 11.377778 28.444444 28.444445 28.444445H341.333333c5.688889 0 17.066667-5.688889 22.755556-5.688889L995.555556 347.022222c0-11.377778 0-34.133333-5.688889-45.511111zM324.266667 938.666667H85.333333v-238.933334l420.977778-409.6L739.555556 523.377778l-415.288889 415.288889z m455.111111-460.8l-233.244445-227.555556 153.6-147.911111 227.555556 227.555556-147.911111 147.911111z"  ></path></symbol><symbol id="icon-shipin" viewBox="0 0 1024 1024"><path d="M682.666667 341.333333c0-96.711111-73.955556-170.666667-170.666667-170.666666S341.333333 244.622222 341.333333 341.333333s73.955556 170.666667 170.666667 170.666667 170.666667-73.955556 170.666667-170.666667zM455.111111 341.333333c0-34.133333 22.755556-56.888889 56.888889-56.888889s56.888889 22.755556 56.888889 56.888889-22.755556 56.888889-56.888889 56.888889-56.888889-22.755556-56.888889-56.888889z"  ></path><path d="M853.333333 910.222222h-96.711111l-51.2-164.977778C824.888889 676.977778 910.222222 546.133333 910.222222 398.222222c0-221.866667-176.355556-398.222222-398.222222-398.222222S113.777778 176.355556 113.777778 398.222222c0 147.911111 85.333333 278.755556 204.8 347.022222L267.377778 910.222222H170.666667c-34.133333 0-56.888889 22.755556-56.888889 56.888889s22.755556 56.888889 56.888889 56.888889h682.666666c34.133333 0 56.888889-22.755556 56.888889-56.888889s-22.755556-56.888889-56.888889-56.888889zM227.555556 398.222222c0-159.288889 125.155556-284.444444 284.444444-284.444444s284.444444 125.155556 284.444444 284.444444-125.155556 284.444444-284.444444 284.444445-284.444444-125.155556-284.444444-284.444445z m159.288888 512l39.822223-113.777778h176.355555l39.822222 113.777778H386.844444z"  ></path></symbol><symbol id="icon-clear" viewBox="0 0 1024 1024"><path d="M938.666667 227.555556H739.555556V85.333333c0-45.511111-39.822222-85.333333-85.333334-85.333333h-284.444444C324.266667 0 284.444444 39.822222 284.444444 85.333333V227.555556H85.333333C39.822222 227.555556 0 267.377778 0 312.888889v170.666667C0 529.066667 39.822222 568.888889 85.333333 568.888889H113.777778v312.888889c0 45.511111 39.822222 85.333333 85.333333 85.333333h625.777778c45.511111 0 85.333333-39.822222 85.333333-85.333333V568.888889h28.444445c45.511111 0 85.333333-39.822222 85.333333-85.333333v-170.666667c0-45.511111-39.822222-85.333333-85.333333-85.333333zM341.333333 85.333333c0-17.066667 11.377778-28.444444 28.444445-28.444444h284.444444c17.066667 0 28.444444 11.377778 28.444445 28.444444V227.555556H341.333333V85.333333z m512 796.444445c0 17.066667-11.377778 28.444444-28.444444 28.444444h-113.777778v-113.777778c0-17.066667-11.377778-28.444444-28.444444-28.444444s-28.444444 11.377778-28.444445 28.444444v113.777778h-227.555555v-113.777778c0-17.066667-11.377778-28.444444-28.444445-28.444444s-28.444444 11.377778-28.444444 28.444444v113.777778h-170.666667c-17.066667 0-28.444444-11.377778-28.444444-28.444444V568.888889h682.666666v312.888889z m113.777778-398.222222c0 17.066667-11.377778 28.444444-28.444444 28.444444h-853.333334c-17.066667 0-28.444444-11.377778-28.444444-28.444444v-170.666667c0-17.066667 11.377778-28.444444 28.444444-28.444445h853.333334c17.066667 0 28.444444 11.377778 28.444444 28.444445v170.666667z"  ></path></symbol><symbol id="icon-camera-off" viewBox="0 0 1024 1024"><path d="M955.733333 68.266667c-22.755556-22.755556-56.888889-22.755556-79.644444 0l-62.577778 62.577777C733.866667 51.2 631.466667 0 512 0 290.133333 0 113.777778 176.355556 113.777778 398.222222c0 119.466667 51.2 221.866667 136.533333 295.822222l-176.355555 176.355556c-22.755556 22.755556-22.755556 56.888889 0 79.644444 11.377778 11.377778 28.444444 17.066667 39.822222 17.066667h5.688889c-5.688889 34.133333 22.755556 56.888889 51.2 56.888889h682.666666c34.133333 0 56.888889-22.755556 56.888889-56.888889s-22.755556-56.888889-56.888889-56.888889h-96.711111l-51.2-164.977778C824.888889 676.977778 910.222222 546.133333 910.222222 398.222222c0-56.888889-11.377778-113.777778-39.822222-164.977778l79.644444-79.644444c28.444444-28.444444 28.444444-62.577778 5.688889-85.333333zM227.555556 398.222222c0-159.288889 125.155556-284.444444 284.444444-284.444444 85.333333 0 164.977778 39.822222 216.177778 102.4l-56.888889 56.888889C642.844444 216.177778 580.266667 170.666667 512 170.666667 415.288889 170.666667 341.333333 244.622222 341.333333 341.333333c0 68.266667 45.511111 130.844444 102.4 159.288889l-113.777777 113.777778C267.377778 563.2 227.555556 483.555556 227.555556 398.222222z m227.555555-56.888889c0-34.133333 22.755556-56.888889 56.888889-56.888889s56.888889 22.755556 56.888889 56.888889-22.755556 56.888889-56.888889 56.888889-56.888889-22.755556-56.888889-56.888889zM193.422222 910.222222l108.088889-108.088889-34.133333 108.088889H193.422222z m409.6-113.777778l39.822222 113.777778H386.844444l39.822223-113.777778h176.355555zM796.444444 398.222222c0 159.288889-125.155556 284.444444-284.444444 284.444445-28.444444 0-51.2-5.688889-79.644444-11.377778l352.711111-352.711111c5.688889 28.444444 11.377778 51.2 11.377777 79.644444z"  ></path></symbol><symbol id="icon-caiquan" viewBox="0 0 1024 1024"><path d="M744.727273 0h-279.272728C321.163636 0 204.8 107.054545 190.836364 246.690909L83.781818 349.090909C46.545455 386.327273 27.927273 432.872727 27.927273 484.072727s18.618182 97.745455 55.854545 130.327273l125.672727 125.672727c37.236364 32.581818 79.127273 55.854545 121.018182 74.472728v97.745454C325.818182 972.8 377.018182 1024 442.181818 1024h325.818182c65.163636 0 116.363636-51.2 116.363636-116.363636v-107.054546c83.781818-46.545455 139.636364-139.636364 139.636364-242.036363V279.272727c0-153.6-125.672727-279.272727-279.272727-279.272727z m46.545454 907.636364c0 13.963636-9.309091 23.272727-23.272727 23.272727h-325.818182c-13.963636 0-23.272727-9.309091-23.272727-23.272727V837.818182h325.818182c13.963636 0 32.581818 0 46.545454-4.654546v74.472728z m139.636364-349.090909c0 102.4-83.781818 186.181818-186.181818 186.181818h-279.272728c-69.818182 0-134.981818-23.272727-195.490909-74.472728l-121.018181-121.018181c-18.618182-18.618182-27.927273-41.890909-27.927273-65.163637s9.309091-46.545455 27.927273-65.163636l37.236363-41.890909V465.454545c0 27.927273 18.618182 46.545455 46.545455 46.545455s46.545455-18.618182 46.545454-46.545455V279.272727c0-102.4 83.781818-186.181818 186.181818-186.181818h279.272728c102.4 0 186.181818 83.781818 186.181818 186.181818v279.272728z"  ></path></symbol><symbol id="icon-mic-off" viewBox="0 0 1024 1024"><path d="M512 682.666667c125.155556 0 227.555556-102.4 227.555556-227.555556V364.088889l216.177777-216.177778c22.755556-22.755556 22.755556-56.888889 0-79.644444-22.755556-22.755556-56.888889-22.755556-79.644444 0L739.555556 204.8c-11.377778-113.777778-108.088889-204.8-227.555556-204.8-125.155556 0-227.555556 102.4-227.555556 227.555556v227.555555c0 56.888889 22.755556 108.088889 56.888889 147.911111l-39.822222 39.822222C256 591.644444 227.555556 529.066667 227.555556 455.111111V398.222222c0-34.133333-22.755556-56.888889-56.888889-56.888889s-56.888889 28.444444-56.888889 56.888889v56.888889c0 102.4 39.822222 199.111111 108.088889 267.377778l-147.911111 147.911111c-22.755556 22.755556-22.755556 56.888889 0 79.644444 11.377778 11.377778 28.444444 17.066667 39.822222 17.066667 17.066667 0 28.444444-5.688889 39.822222-17.066667L307.2 796.444444c45.511111 28.444444 96.711111 45.511111 147.911111 51.2V910.222222H398.222222c-34.133333 0-56.888889 22.755556-56.888889 56.888889s22.755556 56.888889 56.888889 56.888889h227.555556c34.133333 0 56.888889-22.755556 56.888889-56.888889s-22.755556-56.888889-56.888889-56.888889h-56.888889v-62.577778c193.422222-28.444444 341.333333-193.422222 341.333333-392.533333V398.222222c0-34.133333-22.755556-56.888889-56.888889-56.888889s-56.888889 22.755556-56.888889 56.888889v56.888889c0 159.288889-125.155556 284.444444-284.444444 284.444445-45.511111 0-85.333333-11.377778-119.466667-28.444445l45.511111-45.511111c22.755556 11.377778 45.511111 17.066667 73.955556 17.066667z m28.444444-119.466667L625.777778 477.866667c-11.377778 45.511111-45.511111 79.644444-85.333334 85.333333zM398.222222 455.111111V227.555556c0-62.577778 51.2-113.777778 113.777778-113.777778s113.777778 51.2 113.777778 113.777778v91.022222L420.977778 523.377778C409.6 506.311111 398.222222 477.866667 398.222222 455.111111z"  ></path></symbol><symbol id="icon-emoj" viewBox="0 0 1024 1024"><path d="M512 0C228.072727 0 0 228.072727 0 512s228.072727 512 512 512 512-228.072727 512-512S795.927273 0 512 0z m0 930.909091c-232.727273 0-418.909091-186.181818-418.909091-418.909091s186.181818-418.909091 418.909091-418.909091 418.909091 186.181818 418.909091 418.909091-186.181818 418.909091-418.909091 418.909091z"  ></path><path d="M716.8 563.2c-23.272727-9.309091-51.2 0-60.509091 23.272727 0 0-51.2 111.709091-144.290909 111.709091s-144.290909-111.709091-144.290909-111.709091c-9.309091-23.272727-37.236364-32.581818-60.509091-23.272727-23.272727 9.309091-32.581818 37.236364-23.272727 60.509091 4.654545 9.309091 74.472727 167.563636 228.072727 167.563636 153.6 0 223.418182-158.254545 228.072727-167.563636 9.309091-23.272727 0-51.2-23.272727-60.509091z"  ></path><path d="M302.545455 395.636364m-69.818182 0a69.818182 69.818182 0 1 0 139.636363 0 69.818182 69.818182 0 1 0-139.636363 0Z"  ></path><path d="M721.454545 395.636364m-69.818181 0a69.818182 69.818182 0 1 0 139.636363 0 69.818182 69.818182 0 1 0-139.636363 0Z"  ></path></symbol><symbol id="icon-mic-on" viewBox="0 0 1024 1024"><path d="M853.333333 341.333333c-34.133333 0-56.888889 22.755556-56.888889 56.888889v56.888889c0 159.288889-125.155556 284.444444-284.444444 284.444445s-284.444444-125.155556-284.444444-284.444445V398.222222c0-34.133333-22.755556-56.888889-56.888889-56.888889s-56.888889 22.755556-56.888889 56.888889v56.888889c0 199.111111 147.911111 364.088889 341.333333 392.533333V910.222222H398.222222c-34.133333 0-56.888889 22.755556-56.888889 56.888889s22.755556 56.888889 56.888889 56.888889h227.555556c34.133333 0 56.888889-22.755556 56.888889-56.888889s-22.755556-56.888889-56.888889-56.888889h-56.888889v-62.577778c193.422222-28.444444 341.333333-193.422222 341.333333-392.533333V398.222222c0-28.444444-22.755556-56.888889-56.888889-56.888889z"  ></path><path d="M512 682.666667c125.155556 0 227.555556-102.4 227.555556-227.555556V227.555556c0-125.155556-102.4-227.555556-227.555556-227.555556S284.444444 102.4 284.444444 227.555556v227.555555c0 125.155556 102.4 227.555556 227.555556 227.555556zM398.222222 227.555556c0-62.577778 51.2-113.777778 113.777778-113.777778s113.777778 51.2 113.777778 113.777778v227.555555c0 62.577778-51.2 113.777778-113.777778 113.777778s-113.777778-51.2-113.777778-113.777778V227.555556z"  ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m224 723.2c12.8 12.8 12.8 32 0 44.8-12.8 12.8-32 12.8-44.8 0L512 588.8 332.8 768c-12.8 12.8-32 12.8-44.8 0s-12.8-32 0-44.8l179.2-179.2-179.2-179.2c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0L512 499.2 691.2 320c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L556.8 544l179.2 179.2z"  ></path></symbol><symbol id="icon-dot" viewBox="0 0 1024 1024"><path d="M512 512m-128 0a128 128 0 1 0 256 0 128 128 0 1 0-256 0Z" fill="#2c2c2c" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)