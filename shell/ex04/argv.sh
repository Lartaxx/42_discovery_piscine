if [ $# -lt 1 ]
then 
    echo "No arguments supplied"
else
    IT=1;

    for i in $*
    do
        if [[ $IT -gt 3 ]]
        then
            break
        fi

        echo $i
        IT=$((IT + 1))
    done
fi